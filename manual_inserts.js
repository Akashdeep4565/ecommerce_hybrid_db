// Clear existing data (optional)
use ecommerce_hybrid;
db.product_details.deleteMany({});
db.user_activity.deleteMany({});

// Insert 50 Products into product_details
db.product_details.insertMany([
  {
    "product_id": 1,
    "description": "Premium other electronics by LG. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=LG+C3+OLED+TV"
    ],
    "attributes": {
      "brand": "LG",
      "color": "AntiqueWhite"
    },
    "reviews": [
      {
        "user_id": 10,
        "rating": 4,
        "comment": "Near agency add woman.",
        "date": ISODate("2026-05-15T07:03:22Z")
      }
    ]
  },
  {
    "product_id": 2,
    "description": "Premium mobile by Samsung. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Samsung+Galaxy+S24+Ultra"
    ],
    "attributes": {
      "brand": "Samsung",
      "color": "ForestGreen"
    },
    "reviews": [
      {
        "user_id": 17,
        "rating": 4,
        "comment": "Positive too case Mr represent.",
        "date": ISODate("2026-05-15T07:02:33Z")
      }
    ]
  },
  {
    "product_id": 3,
    "description": "Premium mobile by OnePlus. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=OnePlus+12"
    ],
    "attributes": {
      "brand": "OnePlus",
      "color": "IndianRed"
    },
    "reviews": []
  },
  {
    "product_id": 4,
    "description": "Premium computer by Lenovo. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Lenovo+ThinkPad+X1"
    ],
    "attributes": {
      "brand": "Lenovo",
      "color": "WhiteSmoke"
    },
    "reviews": [
      {
        "user_id": 10,
        "rating": 2,
        "comment": "Spend cold school perform together eight growth.",
        "date": ISODate("2026-05-15T07:04:41Z")
      }
    ]
  },
  {
    "product_id": 5,
    "description": "Premium other electronics by Microsoft. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Microsoft+Xbox+Series+X"
    ],
    "attributes": {
      "brand": "Microsoft",
      "color": "CornflowerBlue"
    },
    "reviews": [
      {
        "user_id": 19,
        "rating": 1,
        "comment": "Agency realize line ago.",
        "date": ISODate("2026-05-15T07:04:59Z")
      }
    ]
  },
  {
    "product_id": 6,
    "description": "Premium other electronics by Sony. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Sony+WH-1000XM5"
    ],
    "attributes": {
      "brand": "Sony",
      "color": "Maroon"
    },
    "reviews": []
  },
  {
    "product_id": 7,
    "description": "Premium computer by Lenovo. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Lenovo+ThinkPad+X1"
    ],
    "attributes": {
      "brand": "Lenovo",
      "color": "DeepSkyBlue"
    },
    "reviews": []
  },
  {
    "product_id": 8,
    "description": "Premium computer by Lenovo. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Lenovo+ThinkPad+X1"
    ],
    "attributes": {
      "brand": "Lenovo",
      "color": "LightSeaGreen"
    },
    "reviews": [
      {
        "user_id": 5,
        "rating": 2,
        "comment": "Town physical make down home newspaper answer.",
        "date": ISODate("2026-05-15T07:04:34Z")
      }
    ]
  },
  {
    "product_id": 9,
    "description": "Premium other electronics by Samsung. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Samsung+Odyssey+G9"
    ],
    "attributes": {
      "brand": "Samsung",
      "color": "GoldenRod"
    },
    "reviews": []
  },
  {
    "product_id": 10,
    "description": "Premium computer by Dell. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Dell+XPS+15"
    ],
    "attributes": {
      "brand": "Dell",
      "color": "GhostWhite"
    },
    "reviews": [
      {
        "user_id": 9,
        "rating": 4,
        "comment": "Why me owner run soon matter.",
        "date": ISODate("2026-05-15T07:02:41Z")
      }
    ]
  },
  {
    "product_id": 11,
    "description": "Premium other electronics by Sony. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Sony+PlayStation+5"
    ],
    "attributes": {
      "brand": "Sony",
      "color": "SeaShell"
    },
    "reviews": []
  },
  {
    "product_id": 12,
    "description": "Premium other electronics by Microsoft. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Microsoft+Xbox+Series+X"
    ],
    "attributes": {
      "brand": "Microsoft",
      "color": "PaleGoldenRod"
    },
    "reviews": [
      {
        "user_id": 9,
        "rating": 4,
        "comment": "Cup though professional citizen.",
        "date": ISODate("2026-05-15T07:03:29Z")
      }
    ]
  },
  {
    "product_id": 13,
    "description": "Premium other electronics by Samsung. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Samsung+Odyssey+G9"
    ],
    "attributes": {
      "brand": "Samsung",
      "color": "Red"
    },
    "reviews": []
  },
  {
    "product_id": 14,
    "description": "Premium other electronics by Sony. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Sony+WH-1000XM5"
    ],
    "attributes": {
      "brand": "Sony",
      "color": "BlueViolet"
    },
    "reviews": []
  },
  {
    "product_id": 15,
    "description": "Premium mobile by OnePlus. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=OnePlus+12"
    ],
    "attributes": {
      "brand": "OnePlus",
      "color": "Maroon"
    },
    "reviews": []
  },
  {
    "product_id": 16,
    "description": "Premium other electronics by Sony. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Sony+WH-1000XM5"
    ],
    "attributes": {
      "brand": "Sony",
      "color": "DarkSlateBlue"
    },
    "reviews": []
  },
  {
    "product_id": 17,
    "description": "Premium other electronics by Sony. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Sony+WH-1000XM5"
    ],
    "attributes": {
      "brand": "Sony",
      "color": "Lavender"
    },
    "reviews": []
  },
  {
    "product_id": 18,
    "description": "Premium computer by Lenovo. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Lenovo+ThinkPad+X1"
    ],
    "attributes": {
      "brand": "Lenovo",
      "color": "Navy"
    },
    "reviews": []
  },
  {
    "product_id": 19,
    "description": "Premium other electronics by Sony. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Sony+PlayStation+5"
    ],
    "attributes": {
      "brand": "Sony",
      "color": "DeepSkyBlue"
    },
    "reviews": [
      {
        "user_id": 4,
        "rating": 2,
        "comment": "Up protect instead law action.",
        "date": ISODate("2026-05-15T07:02:35Z")
      },
      {
        "user_id": 2,
        "rating": 3,
        "comment": "Occur leader wind ask impact may himself stand.",
        "date": ISODate("2026-05-15T07:03:00Z")
      }
    ]
  },
  {
    "product_id": 20,
    "description": "Premium mobile by Apple. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Apple+iPhone+15+Pro"
    ],
    "attributes": {
      "brand": "Apple",
      "color": "Gainsboro"
    },
    "reviews": []
  },
  {
    "product_id": 21,
    "description": "Premium other electronics by Sony. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Sony+PlayStation+5"
    ],
    "attributes": {
      "brand": "Sony",
      "color": "Black"
    },
    "reviews": []
  },
  {
    "product_id": 22,
    "description": "Premium mobile by OnePlus. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=OnePlus+12"
    ],
    "attributes": {
      "brand": "OnePlus",
      "color": "PaleGreen"
    },
    "reviews": []
  },
  {
    "product_id": 23,
    "description": "Premium computer by Apple. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Apple+MacBook+Pro+M3"
    ],
    "attributes": {
      "brand": "Apple",
      "color": "Crimson"
    },
    "reviews": []
  },
  {
    "product_id": 24,
    "description": "Premium mobile by OnePlus. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=OnePlus+12"
    ],
    "attributes": {
      "brand": "OnePlus",
      "color": "Thistle"
    },
    "reviews": [
      {
        "user_id": 16,
        "rating": 3,
        "comment": "Challenge conference eye inside ball.",
        "date": ISODate("2026-05-15T07:03:43Z")
      },
      {
        "user_id": 20,
        "rating": 1,
        "comment": "Commercial ball deep together campaign.",
        "date": ISODate("2026-05-15T07:02:55Z")
      }
    ]
  },
  {
    "product_id": 25,
    "description": "Premium mobile by Samsung. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Samsung+Galaxy+S24+Ultra"
    ],
    "attributes": {
      "brand": "Samsung",
      "color": "Snow"
    },
    "reviews": []
  },
  {
    "product_id": 26,
    "description": "Premium computer by Apple. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Apple+MacBook+Pro+M3"
    ],
    "attributes": {
      "brand": "Apple",
      "color": "Beige"
    },
    "reviews": []
  },
  {
    "product_id": 27,
    "description": "Premium mobile by Google. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Google+Pixel+8+Pro"
    ],
    "attributes": {
      "brand": "Google",
      "color": "Green"
    },
    "reviews": []
  },
  {
    "product_id": 28,
    "description": "Premium mobile by Google. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Google+Pixel+8+Pro"
    ],
    "attributes": {
      "brand": "Google",
      "color": "DarkGray"
    },
    "reviews": [
      {
        "user_id": 19,
        "rating": 3,
        "comment": "Station organization order idea.",
        "date": ISODate("2026-05-15T07:02:50Z")
      },
      {
        "user_id": 15,
        "rating": 5,
        "comment": "Wonder couple look quality son allow few.",
        "date": ISODate("2026-05-15T07:03:19Z")
      }
    ]
  },
  {
    "product_id": 29,
    "description": "Premium other electronics by Sony. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Sony+WH-1000XM5"
    ],
    "attributes": {
      "brand": "Sony",
      "color": "OrangeRed"
    },
    "reviews": []
  },
  {
    "product_id": 30,
    "description": "Premium other electronics by Sony. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Sony+PlayStation+5"
    ],
    "attributes": {
      "brand": "Sony",
      "color": "HoneyDew"
    },
    "reviews": []
  },
  {
    "product_id": 31,
    "description": "Premium mobile by Samsung. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Samsung+Galaxy+S24+Ultra"
    ],
    "attributes": {
      "brand": "Samsung",
      "color": "GhostWhite"
    },
    "reviews": []
  },
  {
    "product_id": 32,
    "description": "Premium other electronics by Sony. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Sony+WH-1000XM5"
    ],
    "attributes": {
      "brand": "Sony",
      "color": "Cornsilk"
    },
    "reviews": []
  },
  {
    "product_id": 33,
    "description": "Premium other electronics by LG. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=LG+C3+OLED+TV"
    ],
    "attributes": {
      "brand": "LG",
      "color": "MediumPurple"
    },
    "reviews": []
  },
  {
    "product_id": 34,
    "description": "Premium other electronics by Nintendo. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Nintendo+Switch+OLED"
    ],
    "attributes": {
      "brand": "Nintendo",
      "color": "DarkOrange"
    },
    "reviews": []
  },
  {
    "product_id": 35,
    "description": "Premium other electronics by LG. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=LG+C3+OLED+TV"
    ],
    "attributes": {
      "brand": "LG",
      "color": "PowderBlue"
    },
    "reviews": [
      {
        "user_id": 7,
        "rating": 2,
        "comment": "Book and answer instead short yard.",
        "date": ISODate("2026-05-15T07:02:11Z")
      }
    ]
  },
  {
    "product_id": 36,
    "description": "Premium other electronics by LG. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=LG+C3+OLED+TV"
    ],
    "attributes": {
      "brand": "LG",
      "color": "PaleGoldenRod"
    },
    "reviews": [
      {
        "user_id": 13,
        "rating": 5,
        "comment": "Return base education who foreign simply strategy.",
        "date": ISODate("2026-05-15T07:04:31Z")
      }
    ]
  },
  {
    "product_id": 37,
    "description": "Premium computer by ASUS. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=ASUS+ROG+Zephyrus+G14"
    ],
    "attributes": {
      "brand": "ASUS",
      "color": "OldLace"
    },
    "reviews": []
  },
  {
    "product_id": 38,
    "description": "Premium computer by Dell. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Dell+XPS+15"
    ],
    "attributes": {
      "brand": "Dell",
      "color": "DarkViolet"
    },
    "reviews": []
  },
  {
    "product_id": 39,
    "description": "Premium mobile by Google. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Google+Pixel+8+Pro"
    ],
    "attributes": {
      "brand": "Google",
      "color": "MediumVioletRed"
    },
    "reviews": [
      {
        "user_id": 16,
        "rating": 4,
        "comment": "Fear media month option general to.",
        "date": ISODate("2026-05-15T07:04:10Z")
      }
    ]
  },
  {
    "product_id": 40,
    "description": "Premium mobile by Google. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Google+Pixel+8+Pro"
    ],
    "attributes": {
      "brand": "Google",
      "color": "Fuchsia"
    },
    "reviews": [
      {
        "user_id": 8,
        "rating": 1,
        "comment": "Produce well writer represent.",
        "date": ISODate("2026-05-15T07:02:35Z")
      }
    ]
  },
  {
    "product_id": 41,
    "description": "Premium mobile by Apple. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Apple+iPhone+15+Pro"
    ],
    "attributes": {
      "brand": "Apple",
      "color": "Maroon"
    },
    "reviews": [
      {
        "user_id": 3,
        "rating": 4,
        "comment": "Pass Mr reflect energy change level.",
        "date": ISODate("2026-05-15T07:03:11Z")
      }
    ]
  },
  {
    "product_id": 42,
    "description": "Premium mobile by Samsung. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Samsung+Galaxy+S24+Ultra"
    ],
    "attributes": {
      "brand": "Samsung",
      "color": "Gainsboro"
    },
    "reviews": []
  },
  {
    "product_id": 43,
    "description": "Premium other electronics by Samsung. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Samsung+Odyssey+G9"
    ],
    "attributes": {
      "brand": "Samsung",
      "color": "DarkRed"
    },
    "reviews": []
  },
  {
    "product_id": 44,
    "description": "Premium other electronics by Samsung. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Samsung+Odyssey+G9"
    ],
    "attributes": {
      "brand": "Samsung",
      "color": "OrangeRed"
    },
    "reviews": [
      {
        "user_id": 11,
        "rating": 1,
        "comment": "Beyond exactly street number director my local concern.",
        "date": ISODate("2026-05-15T07:05:05Z")
      }
    ]
  },
  {
    "product_id": 45,
    "description": "Premium computer by Apple. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Apple+MacBook+Pro+M3"
    ],
    "attributes": {
      "brand": "Apple",
      "color": "LightCoral"
    },
    "reviews": []
  },
  {
    "product_id": 46,
    "description": "Premium other electronics by Nintendo. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Nintendo+Switch+OLED"
    ],
    "attributes": {
      "brand": "Nintendo",
      "color": "DarkSalmon"
    },
    "reviews": []
  },
  {
    "product_id": 47,
    "description": "Premium mobile by OnePlus. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=OnePlus+12"
    ],
    "attributes": {
      "brand": "OnePlus",
      "color": "LightSalmon"
    },
    "reviews": []
  },
  {
    "product_id": 48,
    "description": "Premium mobile by Google. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Google+Pixel+8+Pro"
    ],
    "attributes": {
      "brand": "Google",
      "color": "NavajoWhite"
    },
    "reviews": []
  },
  {
    "product_id": 49,
    "description": "Premium computer by Apple. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Apple+MacBook+Pro+M3"
    ],
    "attributes": {
      "brand": "Apple",
      "color": "Khaki"
    },
    "reviews": []
  },
  {
    "product_id": 50,
    "description": "Premium computer by Apple. Features state-of-the-art technology.",
    "images": [
      "https://via.placeholder.com/300?text=Apple+MacBook+Pro+M3"
    ],
    "attributes": {
      "brand": "Apple",
      "color": "Lavender"
    },
    "reviews": [
      {
        "user_id": 3,
        "rating": 1,
        "comment": "By during several expert small.",
        "date": ISODate("2026-05-15T07:05:10Z")
      }
    ]
  }
]);

// Insert User Activities
db.user_activity.insertMany([
  {
    "user_id": 1,
    "actions": [
      {
        "type": "add_to_cart",
        "product_id": 45,
        "timestamp": ISODate("2026-05-15T07:04:48Z"),
        "details": {
          "source": "house"
        }
      },
      {
        "type": "view_product",
        "product_id": 41,
        "timestamp": ISODate("2026-05-15T07:04:54Z"),
        "details": {
          "source": "night"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 48,
        "timestamp": ISODate("2026-05-15T07:04:11Z"),
        "details": {
          "source": "environment"
        }
      }
    ]
  },
  {
    "user_id": 2,
    "actions": [
      {
        "type": "add_to_cart",
        "product_id": 47,
        "timestamp": ISODate("2026-05-15T07:04:57Z"),
        "details": {
          "source": "history"
        }
      },
      {
        "type": "view_product",
        "product_id": 28,
        "timestamp": ISODate("2026-05-15T07:04:47Z"),
        "details": {
          "source": "information"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 20,
        "timestamp": ISODate("2026-05-15T07:04:23Z"),
        "details": {
          "source": "everybody"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 34,
        "timestamp": ISODate("2026-05-15T07:05:07Z"),
        "details": {
          "source": "base"
        }
      },
      {
        "type": "view_product",
        "product_id": 15,
        "timestamp": ISODate("2026-05-15T07:04:55Z"),
        "details": {
          "source": "me"
        }
      }
    ]
  },
  {
    "user_id": 3,
    "actions": [
      {
        "type": "view_product",
        "product_id": 22,
        "timestamp": ISODate("2026-05-15T07:04:39Z"),
        "details": {
          "source": "say"
        }
      },
      {
        "type": "view_product",
        "product_id": 30,
        "timestamp": ISODate("2026-05-15T07:04:18Z"),
        "details": {
          "source": "offer"
        }
      },
      {
        "type": "search",
        "product_id": 43,
        "timestamp": ISODate("2026-05-15T07:04:25Z"),
        "details": {
          "source": "pay"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 11,
        "timestamp": ISODate("2026-05-15T07:04:35Z"),
        "details": {
          "source": "attorney"
        }
      },
      {
        "type": "search",
        "product_id": 2,
        "timestamp": ISODate("2026-05-15T07:04:39Z"),
        "details": {
          "source": "sure"
        }
      }
    ]
  },
  {
    "user_id": 4,
    "actions": [
      {
        "type": "search",
        "product_id": 15,
        "timestamp": ISODate("2026-05-15T07:04:21Z"),
        "details": {
          "source": "seem"
        }
      },
      {
        "type": "view_product",
        "product_id": 2,
        "timestamp": ISODate("2026-05-15T07:04:37Z"),
        "details": {
          "source": "several"
        }
      }
    ]
  },
  {
    "user_id": 5,
    "actions": [
      {
        "type": "view_product",
        "product_id": 45,
        "timestamp": ISODate("2026-05-15T07:04:59Z"),
        "details": {
          "source": "father"
        }
      },
      {
        "type": "search",
        "product_id": 49,
        "timestamp": ISODate("2026-05-15T07:04:15Z"),
        "details": {
          "source": "produce"
        }
      },
      {
        "type": "view_product",
        "product_id": 2,
        "timestamp": ISODate("2026-05-15T07:05:05Z"),
        "details": {
          "source": "him"
        }
      },
      {
        "type": "search",
        "product_id": 30,
        "timestamp": ISODate("2026-05-15T07:04:35Z"),
        "details": {
          "source": "base"
        }
      }
    ]
  },
  {
    "user_id": 6,
    "actions": [
      {
        "type": "search",
        "product_id": 49,
        "timestamp": ISODate("2026-05-15T07:04:39Z"),
        "details": {
          "source": "tree"
        }
      },
      {
        "type": "search",
        "product_id": 32,
        "timestamp": ISODate("2026-05-15T07:04:41Z"),
        "details": {
          "source": "travel"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 9,
        "timestamp": ISODate("2026-05-15T07:05:05Z"),
        "details": {
          "source": "agency"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 22,
        "timestamp": ISODate("2026-05-15T07:04:29Z"),
        "details": {
          "source": "information"
        }
      },
      {
        "type": "view_product",
        "product_id": 2,
        "timestamp": ISODate("2026-05-15T07:04:48Z"),
        "details": {
          "source": "lot"
        }
      }
    ]
  },
  {
    "user_id": 7,
    "actions": [
      {
        "type": "add_to_cart",
        "product_id": 38,
        "timestamp": ISODate("2026-05-15T07:04:11Z"),
        "details": {
          "source": "every"
        }
      },
      {
        "type": "view_product",
        "product_id": 16,
        "timestamp": ISODate("2026-05-15T07:04:34Z"),
        "details": {
          "source": "shoulder"
        }
      },
      {
        "type": "search",
        "product_id": 10,
        "timestamp": ISODate("2026-05-15T07:04:46Z"),
        "details": {
          "source": "those"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 26,
        "timestamp": ISODate("2026-05-15T07:04:13Z"),
        "details": {
          "source": "image"
        }
      },
      {
        "type": "search",
        "product_id": 13,
        "timestamp": ISODate("2026-05-15T07:04:54Z"),
        "details": {
          "source": "camera"
        }
      }
    ]
  },
  {
    "user_id": 8,
    "actions": [
      {
        "type": "search",
        "product_id": 9,
        "timestamp": ISODate("2026-05-15T07:04:32Z"),
        "details": {
          "source": "dog"
        }
      },
      {
        "type": "view_product",
        "product_id": 1,
        "timestamp": ISODate("2026-05-15T07:04:46Z"),
        "details": {
          "source": "keep"
        }
      },
      {
        "type": "view_product",
        "product_id": 48,
        "timestamp": ISODate("2026-05-15T07:04:59Z"),
        "details": {
          "source": "read"
        }
      },
      {
        "type": "view_product",
        "product_id": 2,
        "timestamp": ISODate("2026-05-15T07:04:21Z"),
        "details": {
          "source": "president"
        }
      }
    ]
  },
  {
    "user_id": 9,
    "actions": [
      {
        "type": "search",
        "product_id": 25,
        "timestamp": ISODate("2026-05-15T07:05:06Z"),
        "details": {
          "source": "fish"
        }
      },
      {
        "type": "search",
        "product_id": 3,
        "timestamp": ISODate("2026-05-15T07:04:17Z"),
        "details": {
          "source": "remain"
        }
      }
    ]
  },
  {
    "user_id": 10,
    "actions": [
      {
        "type": "view_product",
        "product_id": 14,
        "timestamp": ISODate("2026-05-15T07:04:11Z"),
        "details": {
          "source": "theory"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 39,
        "timestamp": ISODate("2026-05-15T07:04:25Z"),
        "details": {
          "source": "then"
        }
      }
    ]
  },
  {
    "user_id": 11,
    "actions": [
      {
        "type": "view_product",
        "product_id": 47,
        "timestamp": ISODate("2026-05-15T07:04:45Z"),
        "details": {
          "source": "president"
        }
      },
      {
        "type": "search",
        "product_id": 20,
        "timestamp": ISODate("2026-05-15T07:04:48Z"),
        "details": {
          "source": "moment"
        }
      },
      {
        "type": "search",
        "product_id": 25,
        "timestamp": ISODate("2026-05-15T07:04:42Z"),
        "details": {
          "source": "of"
        }
      },
      {
        "type": "search",
        "product_id": 35,
        "timestamp": ISODate("2026-05-15T07:04:28Z"),
        "details": {
          "source": "control"
        }
      },
      {
        "type": "view_product",
        "product_id": 19,
        "timestamp": ISODate("2026-05-15T07:04:37Z"),
        "details": {
          "source": "happen"
        }
      }
    ]
  },
  {
    "user_id": 12,
    "actions": [
      {
        "type": "view_product",
        "product_id": 2,
        "timestamp": ISODate("2026-05-15T07:04:45Z"),
        "details": {
          "source": "sign"
        }
      },
      {
        "type": "view_product",
        "product_id": 20,
        "timestamp": ISODate("2026-05-15T07:04:31Z"),
        "details": {
          "source": "alone"
        }
      }
    ]
  },
  {
    "user_id": 13,
    "actions": [
      {
        "type": "view_product",
        "product_id": 41,
        "timestamp": ISODate("2026-05-15T07:05:09Z"),
        "details": {
          "source": "east"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 5,
        "timestamp": ISODate("2026-05-15T07:04:24Z"),
        "details": {
          "source": "yeah"
        }
      },
      {
        "type": "view_product",
        "product_id": 10,
        "timestamp": ISODate("2026-05-15T07:04:14Z"),
        "details": {
          "source": "audience"
        }
      },
      {
        "type": "view_product",
        "product_id": 31,
        "timestamp": ISODate("2026-05-15T07:04:59Z"),
        "details": {
          "source": "line"
        }
      },
      {
        "type": "view_product",
        "product_id": 15,
        "timestamp": ISODate("2026-05-15T07:04:32Z"),
        "details": {
          "source": "ask"
        }
      }
    ]
  },
  {
    "user_id": 14,
    "actions": [
      {
        "type": "add_to_cart",
        "product_id": 19,
        "timestamp": ISODate("2026-05-15T07:04:56Z"),
        "details": {
          "source": "son"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 44,
        "timestamp": ISODate("2026-05-15T07:04:28Z"),
        "details": {
          "source": "care"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 16,
        "timestamp": ISODate("2026-05-15T07:04:44Z"),
        "details": {
          "source": "activity"
        }
      },
      {
        "type": "search",
        "product_id": 1,
        "timestamp": ISODate("2026-05-15T07:04:32Z"),
        "details": {
          "source": "ten"
        }
      }
    ]
  },
  {
    "user_id": 15,
    "actions": [
      {
        "type": "search",
        "product_id": 26,
        "timestamp": ISODate("2026-05-15T07:04:55Z"),
        "details": {
          "source": "value"
        }
      },
      {
        "type": "search",
        "product_id": 26,
        "timestamp": ISODate("2026-05-15T07:04:16Z"),
        "details": {
          "source": "bring"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 29,
        "timestamp": ISODate("2026-05-15T07:05:03Z"),
        "details": {
          "source": "young"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 37,
        "timestamp": ISODate("2026-05-15T07:05:08Z"),
        "details": {
          "source": "too"
        }
      }
    ]
  },
  {
    "user_id": 16,
    "actions": [
      {
        "type": "add_to_cart",
        "product_id": 28,
        "timestamp": ISODate("2026-05-15T07:04:24Z"),
        "details": {
          "source": "travel"
        }
      },
      {
        "type": "search",
        "product_id": 1,
        "timestamp": ISODate("2026-05-15T07:05:00Z"),
        "details": {
          "source": "thousand"
        }
      },
      {
        "type": "view_product",
        "product_id": 13,
        "timestamp": ISODate("2026-05-15T07:04:11Z"),
        "details": {
          "source": "radio"
        }
      }
    ]
  },
  {
    "user_id": 17,
    "actions": [
      {
        "type": "search",
        "product_id": 3,
        "timestamp": ISODate("2026-05-15T07:04:55Z"),
        "details": {
          "source": "individual"
        }
      },
      {
        "type": "view_product",
        "product_id": 7,
        "timestamp": ISODate("2026-05-15T07:04:53Z"),
        "details": {
          "source": "various"
        }
      },
      {
        "type": "view_product",
        "product_id": 37,
        "timestamp": ISODate("2026-05-15T07:04:56Z"),
        "details": {
          "source": "board"
        }
      },
      {
        "type": "view_product",
        "product_id": 14,
        "timestamp": ISODate("2026-05-15T07:04:32Z"),
        "details": {
          "source": "what"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 30,
        "timestamp": ISODate("2026-05-15T07:04:15Z"),
        "details": {
          "source": "generation"
        }
      }
    ]
  },
  {
    "user_id": 18,
    "actions": [
      {
        "type": "add_to_cart",
        "product_id": 30,
        "timestamp": ISODate("2026-05-15T07:04:55Z"),
        "details": {
          "source": "data"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 43,
        "timestamp": ISODate("2026-05-15T07:04:34Z"),
        "details": {
          "source": "role"
        }
      },
      {
        "type": "view_product",
        "product_id": 38,
        "timestamp": ISODate("2026-05-15T07:04:55Z"),
        "details": {
          "source": "natural"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 21,
        "timestamp": ISODate("2026-05-15T07:04:14Z"),
        "details": {
          "source": "process"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 29,
        "timestamp": ISODate("2026-05-15T07:04:59Z"),
        "details": {
          "source": "lead"
        }
      }
    ]
  },
  {
    "user_id": 19,
    "actions": [
      {
        "type": "search",
        "product_id": 49,
        "timestamp": ISODate("2026-05-15T07:05:10Z"),
        "details": {
          "source": "that"
        }
      },
      {
        "type": "view_product",
        "product_id": 30,
        "timestamp": ISODate("2026-05-15T07:04:28Z"),
        "details": {
          "source": "window"
        }
      },
      {
        "type": "search",
        "product_id": 25,
        "timestamp": ISODate("2026-05-15T07:05:07Z"),
        "details": {
          "source": "religious"
        }
      },
      {
        "type": "add_to_cart",
        "product_id": 34,
        "timestamp": ISODate("2026-05-15T07:04:38Z"),
        "details": {
          "source": "plant"
        }
      }
    ]
  },
  {
    "user_id": 20,
    "actions": [
      {
        "type": "add_to_cart",
        "product_id": 31,
        "timestamp": ISODate("2026-05-15T07:04:19Z"),
        "details": {
          "source": "price"
        }
      },
      {
        "type": "view_product",
        "product_id": 1,
        "timestamp": ISODate("2026-05-15T07:04:12Z"),
        "details": {
          "source": "part"
        }
      }
    ]
  }
]);
