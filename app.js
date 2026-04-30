// Intercept fetch if on github.io to mock API calls for the live demo
const originalFetch = window.fetch;
window.fetch = async function(url, options) {
    if (window.location.hostname.includes('github.io')) {
        console.log(`Mocking fetch to ${url}`);
        await new Promise(r => setTimeout(r, 400)); // Simulate network delay
        
        if (url.startsWith('/products')) {
            return { ok: true, json: async () => ({ message: "✔ Product added successfully (Demo Mode)", product_id: 999 }) };
        }
        if (url.startsWith('/place_order')) {
            return { ok: true, json: async () => ({ message: "✔ Order placed successfully (Demo Mode)", order_id: 888, total: 100 }) };
        }
        if (url.startsWith('/view_product')) {
            return { ok: true, json: async () => ({
                id: 1, name: "Sample Demo Product", price: 99.99, stock_quantity: 42,
                category: "Electronics", description: "This is a simulated product for the live demo since GitHub Pages cannot run the Python/Postgres backend.",
                reviews: [{user_id: 1, rating: 5, comment: "Great simulated product!"}],
                average_rating: 5.0
            }) };
        }
        if (url.startsWith('/add_review')) {
            return { ok: true, json: async () => ({ message: "✔ Review added successfully (Demo Mode)" }) };
        }
        return { ok: false, json: async () => ({ detail: "Not found in demo mode" }) };
    }
    return originalFetch(url, options);
};

document.addEventListener('DOMContentLoaded', () => {
    
    // Add Product
    document.getElementById('add-product-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const res = await fetch('/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    product_id: parseInt(data.product_id),
                    name: data.name,
                    price: parseFloat(data.price),
                    stock: parseInt(data.stock),
                    category: data.category,
                    description: data.description
                })
            });
            const result = await res.json();
            if (res.ok) showToast(result.message || 'Product Added', 'success');
            else showToast(result.detail || 'Error', 'error');
            e.target.reset();
        } catch (err) {
            showToast('Network error', 'error');
        }
    });

    // Place Order
    document.getElementById('place-order-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const res = await fetch('/place_order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: parseInt(data.user_id),
                    product_id: parseInt(data.product_id),
                    quantity: parseInt(data.quantity)
                })
            });
            const result = await res.json();
            if (res.ok) showToast(result.message || 'Order Placed', 'success');
            else showToast(result.detail || 'Error', 'error');
            e.target.reset();
        } catch (err) {
            showToast('Network error', 'error');
        }
    });

    // View Product
    document.getElementById('view-product-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const productId = formData.get('product_id');
        const resultDiv = document.getElementById('product-details-result');
        
        try {
            const res = await fetch(`/view_product?product_id=${productId}`);
            const result = await res.json();
            
            if (res.ok) {
                let reviewsHtml = '';
                if (result.reviews && result.reviews.length > 0) {
                    result.reviews.forEach(r => {
                        reviewsHtml += `<li>User ${r.user_id} - Rating ${r.rating} - ${r.comment}</li>`;
                    });
                } else {
                    reviewsHtml = '<li>No reviews yet.</li>';
                }

                resultDiv.innerHTML = `
                    <div style='padding:20px;'>
                         <h2>${result.name}</h2>
                         <p><b>Price:</b> ₹${result.price}</p>
                         <p><b>Stock:</b> ${result.stock_quantity}</p>
                         <p><b>Category:</b> ${result.category}</p>
                         <p><b>Description:</b> ${result.description}</p>
                         <h3>Reviews:</h3>
                         <ul>${reviewsHtml}</ul>
                    </div>
                `;
                resultDiv.style.display = 'block';
            } else {
                resultDiv.innerHTML = `<h3 style='color:red;'>${result.detail || 'Product not found'}</h3>`;
                resultDiv.style.display = 'block';
            }
            e.target.reset();
        } catch (err) {
            resultDiv.innerHTML = "<h3 style='color:red;'>Network Error</h3>";
            resultDiv.style.display = 'block';
        }
    });

    // Add Review
    document.getElementById('add-review-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const res = await fetch('/add_review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    product_id: parseInt(data.product_id),
                    user_id: parseInt(data.user_id),
                    rating: parseInt(data.rating),
                    comment: data.comment
                })
            });
            const result = await res.json();
            if (res.ok) showToast(result.message || 'Review Added', 'success');
            else showToast(result.detail || 'Error', 'error');
            e.target.reset();
        } catch (err) {
            showToast('Network error', 'error');
        }
    });

});

function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
