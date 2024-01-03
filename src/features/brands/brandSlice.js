import { createSlice } from "@reduxjs/toolkit";

// Images Import

import National from "../../images/national foods.png";

const initialState = {
  brands: [
    {
      id: "2401",
      name: "National Foods",
      category: "Groceries",
      description:"National Foods Limited (نیشنل فوڈز لمیٹڈ) is a Pakistani multinational food products company founded in 1970, which started out as a spice company, and is based in Karachi, Pakistan.[2][3] It is a major food products company in Pakistan.",
      brand_logo: National,
      website_url: "www.nfoods.com",
      founder: "Abdul Majeed",
      products: [
        {
          p_name: "National Masalay",
          p_category: "Groceries",
          p_img: National,
        },
        {
            p_name: "National Tomato Ketchup",
            p_category: "Groceries",
            p_img: National,
          },
          {
            p_name: "National Salt",
            p_category: "Groceries",
            p_img: National,
          },
      ],
    },
    {
      id: "2402",
      name: "EBM Peek Freans",
      category: "Food & Beverage",
      description:"EBM is a leading biscuit manufacturer in Pakistan, producing a wide range of biscuits and baked snacks.",
      brand_logo: National,
      website_url: "www.ebm.com.pk",
      founder: "Khawar Masood Butt",
      products: [
        {
          p_name: "Sooper",
          p_category: "Food & Beverage",
          p_img: National,
        },
        {
            p_name: "RIO",
            p_category: "Food & Beverage",
            p_img: National,
          },
          {
            p_name: "Gluco",
            p_category: "Food & Beverage",
            p_img: National,
          },
      ],
    },
    {
      id: "2403",
      name: "Continental Biscuits Limited",
      category: "Food & Beverage",
      description:"Continental Biscuits Limited is a prominent biscuit and snack manufacturer, offering popular biscuits like LU and TUC.",
      brand_logo: National,
      website_url: "www.continentalbiscuits.com.pk",
      founder: "Hasan Ali Khan",
      products: [
        {
          p_name: "TUC",
          p_category: "Food & Beverage",
          p_img: National,
        },
        {
            p_name: "Oreo",
            p_category: "Food & Beverage",
            p_img: National,
          },
          {
            p_name: "Prince",
            p_category: "Foods and Beverages",
            p_img: National,
          },
      ],
    },
    {
      id: "2404",
      name: "Ismail Industries Limited",
      category: "Food & Beverage",
      description:"Ismail Industries Limited is a diversified company producing a variety of snacks and beverages, including candies, toffees, and dairy products. It is owner of popular brands like Candyland, Bisconi, and SnackCity.",
      brand_logo: National,
      website_url: "www.ismailindustries.com.pk",
      founder: "Muhammad Ismail",
      products: [
        {
          p_name: "CandyLand",
          p_category: "Food & Beverage",
          p_img: National,
        },
        {
            p_name: "Bisconi",
            p_category: "Food & Beverage",
            p_img: National,
          },
          {
            p_name: "SnackCity",
            p_category: "Food & Beverage",
            p_img: National,
          },
      ],
    },
    {
      id: "2405",
      name: "Shan Foods",
      category: "Groceries",
      description:"Shan Foods is a renowned brand offering a diverse range of spice mixes, recipe mixes, and food products to enhance the culinary experience.",
      brand_logo: National,
      website_url: "www.shanfoods.com",
      founder: "Sikander Sultan",
      products: [
        {
          p_name: "Sauces",
          p_category: "Groceries",
          p_img: National,
        },
        {
            p_name: "Rice Range",
            p_category: "Groceries",
            p_img: National,
          },
          {
            p_name: "Shan Chaat",
            p_category: "Groceries",
            p_img: National,
          },
      ],
    },
    {
      id: "2406",
      name: "Mitchell's Fruit Farms",
      category: "Groceries",
      description:"Mitchell's Fruit Farms is known for its wide range of fruit-based products, including jams, juices, and canned fruits.",
      brand_logo: National,
      website_url: "www.mitchells.com.pk",
      founder: "Francis J. Mitchell",
      products: [
        {
          p_name: "Mitchell's Beverages",
          p_category: "Groceries",
          p_img: National,
        },
        {
            p_name: "Mitchell's Ketchup & Sauces",
            p_category: "Groceries",
            p_img: National,
          },
          {
            p_name: "Mitchell's Preserves",
            p_category: "Groceries",
            p_img: National,
          },
      ],
    },
    {
      id: "2407",
      name: "Tapal Tea",
      category: "Groceries",
      description:"Tapal Tea is a prominent tea company, known for its wide range of tea blends, offering a flavorful experience to tea enthusiasts.",
      brand_logo: National,
      website_url: "www.tapaltea.com",
      founder: "Adam Ali Tapal",
      products: [
        {
          p_name: "Tapal Danedar",
          p_category: "Groceries",
          p_img: National,
        },
        {
            p_name: "Tapal Tezdum",
            p_category: "Groceries",
            p_img: National,
          },
          {
            p_name: "Tapal Family Mixture",
            p_category: "Groceriess",
            p_img: National,
          },
      ],
    },
    {
      id: "2408",
      name: "Sufi",
      category: "Groceries",
      description:"Sufi is a brand offering a variety of food products, including rice and cooking oils, providing essential ingredients for daily meals.",
      brand_logo: National,
      website_url: "www.sufioilandghee.com",
      founder: "Sufi Group",
      products: [
        {
          p_name: "Sufi Cooking Oil",
          p_category: "Groceries",
          p_img: National,
        },
        {
            p_name: "Sufi Detergent",
            p_category: "Groceries",
            p_img: National,
          },
          {
            p_name: "Sufi Water",
            p_category: "Groceries",
            p_img: National,
          },
      ],
    },
    {
      id: "2443",
      name: "FrieslandCampina Engro Pakistan Limited",
      category: "Groceries",
      description:"FrieslandCampina Engro Pakistan Limited is a joint venture between FrieslandCampina and Engro Corporation, operating in the dairy industry in Pakistan. The company is involved in milk collection, processing, and the distribution of various dairy products, including milk and yogurt. For the latest information, it's advisable to refer to official sources or the company's website.",
      brand_logo: National,
      website_url: "www.engro.com/frieslandcampina/",
      founder: "FrieslandCampina Engro Pakistan ",
      products: [
        {
          p_name: "Olper's",
          p_category: "Groceries",
          p_img: National,
        },
        {
            p_name: "Omoré",
            p_category: "Groceries",
            p_img: National,
          },
          {
            p_name: "Tarang",
            p_category: "Groceries",
            p_img: National,
          },
      ],
    },
    {
      id: "2409",
      name: "Dalda Food Limited",
      category: "Groceries",
      description:"Dalda Food Limited is a well-known brand offering cooking oils and fats, catering to the cooking and baking needs of households.",
      brand_logo: National,
      website_url: "www.daldafoods.com",
      founder: "Dalda",
      products: [
        {
          p_name: "Dalda Cooking Oil",
          p_category: "Groceries",
          p_img: National,
        },
        {
            p_name: "Manpasand Coking Oil",
            p_category: "Groceries",
            p_img: National,
          },
          {
            p_name: "Cup Shup",
            p_category: "Groceries",
            p_img: National,
          },
      ],
    },
    {
      id: "2410",
      name: "Gourmet Foods",
      category: "Food & Beverage",
      description:"Gourmet Foods is a leading food company, operating in the bakery, dairy, and food services sectors, providing a wide range of products.",
      brand_logo: National,
      website_url: "www.gourmetpakistan.com",
      founder: "Gourmet Group",
      products: [
        {
          p_name: "Gourmet Bakery Products",
          p_category: "Food & Beverage",
          p_img: National,
        },
        {
            p_name: "Gourmet Cola",
            p_category: "Food & Beverage",
            p_img: National,
          },
      ],
    },
    {
      id: "2411",
      name: "Pakola Products Limited",
      category: "Food & Beverage",
      description:"Pakola is a popular brand in the beverage industry, offering a range of flavored carbonated drinks.",
      brand_logo: National,
      website_url: "www.pakola.com.pk",
      founder: "Bashir Ahmed Sheikh",
      products: [
        {
          p_name: "Apple Sidra",
          p_category: "Food & Beverage",
          p_img: National,
        },
        {
            p_name: "Pakola",
            p_category: "Food & Beverage",
            p_img: National,
          },
          {
            p_name: "Pakola Water",
            p_category: "Food & Beverage",
            p_img: National,
          },
      ],
    },
    {
      id: "2412",
      name: "Hilal Foods",
      category: "Food & Beverage",
      description:"Hilal Foods is a prominent food company in Pakistan, specializing in the production of snacks, culinary products, and frozen foods.",
      brand_logo: National,
      website_url: "www.hilalfoods.com.pk",
      founder: "Iqbal Ahmed",
      products: [
        {
          p_name: "Kake",
          p_category: "Food & Beverage",
          p_img: National,
        },
        {
            p_name: "Cup Kake",
            p_category: "Food & Beverage",
            p_img: National,
          },
          {
            p_name: "Ding Dong",
            p_category: "Food & Beverage",
            p_img: National,
          },
          {
            p_name: "Fresh up Bubble",
            p_category: "Food & Beverage",
            p_img: National,
          },
      ],
    },
    {
      id: "2413",
      name: "Haleeb Foods Limited",
      category: "Groceries",
      description:"Haleeb Foods is a leading dairy company, known for its dairy products, including milk, yogurt, and desserts.",
      brand_logo: National,
      website_url: "www.haleebfoods.com",
      founder: "Chaudhry Abdul Majeed",
      products: [
        {
          p_name: "Haleeb Packed Milk",
          p_category: "Groceries",
          p_img: National,
        },
        {
            p_name: "Haleeb Dairy Cream",
            p_category: "Groceries",
            p_img: National,
          },
          {
            p_name: "Haleeb Tropico",
            p_category: "Groceries",
            p_img: National,
          },
      ],
    },
    {
      id: "2414",
      name: "Volka Foods",
      category: "Foods and Beverages",
      description:"Volka Food company is popular food company owner of boom booms bubble parent company.",
      brand_logo: National,
      website_url: "www.volkafood.com",
      founder: "Saim Zulfiqar (CEO)",
      products: [
        {
          p_name: "Boom Boom",
          p_category: "Foods and Beverages",
          p_img: National,
        },
        {
            p_name: "Tea Time",
            p_category: "Foods and Beverages",
            p_img: National,
          },
      ],
    },
    {
      id: "2415",
      name: "Dawn Bread",
      category: "Groceries",
      description:"Dawn Bread is a popular bakery brand, producing a variety of bread and bakery products for consumers in Pakistan.",
      brand_logo: National,
      website_url: "www.dawnbread.com",
      founder: "Hassan Ali Khan",
      products: [
        {
          p_name: "Dawn Bread",
          p_category: "Groceries",
          p_img: National,
        },
        {
            p_name: "Burger Bun",
            p_category: "Groceries",
            p_img: National,
          },
      ],
    },
    {
      id: "2416",
      name: "Saeed Ghani",
      category: "Personal Care",
      description:"Saeed Ghani is a renowned brand known for its traditional and herbal personal care products, including oils, soaps,fragrances and skincare items.",
      brand_logo: National,
      website_url: "www.saeedghani.pk",
      founder: "Saeed Ghani",
      products: [
        {
          p_name: "SkinCare Products",
          p_category: "Personal Care",
          p_img: National,
        },
        {
            p_name: "HairCare Products",
            p_category: "Personal Care",
            p_img: National,
          },
          {
            p_name: "Fragrances",
            p_category: "Personal Care",
            p_img: National,
          },
      ],
    },
    {
      id: "2417",
      name: "Primary Skincare",
      category: "Personal Care",
      description:"Primary Skincare is a brand that focuses on creating effective and simple skincare solutions, emphasizing the importance of natural ingredients.",
      brand_logo: National,
      website_url: "www.primaryskincare.co",
      founder: "Nida Fasil",
      products: [
        {
          p_name: "Simple Skincare Solutions",
          p_category: "Personal Care",
          p_img: National,
        },
        {
            p_name: "Natural Face Cleansers",
            p_category: "Personal Care",
            p_img: National,
          },
          {
            p_name: "Minimalist Skincare Kits",
            p_category: "Personal Care",
            p_img: National,
          },
      ],
    },
    {
      id: "2418",
      name: "Conatural",
      category: "Personal Care",
      description:"Conatural is a brand dedicated to providing organic and natural personal care products, including skincare, hair care, and body care items.",
      brand_logo: National,
      website_url: "www.conaturalintl.com",
      founder: "Myra Qureshi",
      products: [
        {
          p_name: "Organic Skincare Products",
          p_category: "Personal Care",
          p_img: National,
        },
        {
            p_name: "Hair Care Treatments",
            p_category: "Personal Care",
            p_img: National,
          },
          {
            p_name: "Body Care Items (Soaps, Lotions)",
            p_category: "Personal Care",
            p_img: National,
          },
      ],
    },
    {
      id: "2419",
      name: "Vince Care",
      category: "Personal Care",
      description:"Vince Care is a brand that specializes in personal care products, including skincare and hair care items, with a focus on quality and innovation.",
      brand_logo: National,
      website_url: "www.vincecare.com",
      founder: "MABLAY BEAUTY (Pvt.) Ltd",
      products: [
        {
          p_name: "Quality Skincare Solutions",
          p_category: "Personal Care",
          p_img: National,
        },
        {
            p_name: "Hair Care Products",
            p_category: "Personal Care",
            p_img: National,
          },
          {
            p_name: "Cleansers and Toners",
            p_category: "Personal Care",
            p_img: National,
          },
      ],
    },
    {
      id: "2420",
      name: "Beautify by Amna",
      category: "Personal Care",
      description:"Beautify by Amna is a brand known for its beauty and skincare products, offering a variety of solutions for a radiant and healthy appearance.",
      brand_logo: National,
      website_url: "www.beautifybyamna.com",
      founder: "Amna Farhad",
      products: [
        {
          p_name: "Beauty and Skincare Products",
          p_category: "Personal Care",
          p_img: National,
        },
        {
            p_name: "Makeup Essentials",
            p_category: "Personal Care",
            p_img: National,
          },
          {
            p_name: "Beauty Tools and Accessories",
            p_category: "Personal Care",
            p_img: National,
          },
      ],
    },
    {
      id: "2429",
      name: "Nutrifactor",
      category: "Personal Care",
      description:"Nutrifactor is a brand that combines nutrition and skincare, providing products that aim to enhance overall well-being and promote healthy skin.",
      brand_logo: National,
      website_url: "www.nutrifactor.com.pk",
      founder: "Amjad Ali(CEO)",
      products: [
        {
          p_name: "Nutritional Supplements for Skin Health",
          p_category: "Personal Care",
          p_img: National,
        },
        {
            p_name: "Collagen Boosting Formulas",
            p_category: "Personal Care",
            p_img: National,
          },
          {
            p_name: "Skincare Vitamins and Minerals",
            p_category: "Personal Care",
            p_img: National,
          },
      ],
    },
    {
      id: "2430",
      name: "Le Pur Organics",
      category: "Personal Care",
      description:"Le Pur Organics is a brand offering a range of natural and organic skincare products, promoting a clean and holistic approach to personal care.",
      brand_logo: National,
      website_url: "www.lepurorganics.com",
      founder: "Rukhsana Ibad",
      products: [
        {
          p_name: "Organic and Natural Skincare",
          p_category: "Personal Care",
          p_img: National,
        },
        {
            p_name: "Clean Beauty Products",
            p_category: "Personal Care",
            p_img: National,
          },
          {
            p_name: "Handcrafted Soaps",
            p_category: "Personal Care",
            p_img: National,
          },
      ],
    },
    {
      id: "2421",
      name: "Bareeze",
      category: "Clothing and Apparel",
      description:"Bareeze is a well-established brand specializing in high-quality embroidered fabrics, ready-to-wear outfits, and accessories.",
      brand_logo: National,
      website_url: "www.bareeze.com",
      founder: "Seema Aziz",
      products: [
        {
          p_name: "Embroidered Lawn Suits",
          p_category: "Clothing and Apparel",
          p_img: National,
        },
        {
            p_name: "Chiffon and Silk Collections",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
          {
            p_name: "Ready-to-Wear Outfits",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
      ],
    },
    {
      id: "2422",
      name: "Alkaram Studio",
      category: "Clothing and Apparel",
      description:"Alkaram Studio is a textile and clothing brand, providing a wide range of fabrics, ready-to-wear outfits, and accessories.",
      brand_logo: National,
      website_url: "www.alkaramstudio.com",
      founder: "Alkaram Group",
      products: [
        {
          p_name: "Men's and Women's Clothing",
          p_category: "Clothing and Apparel",
          p_img: National,
        },
        {
            p_name: "Home Textiles",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
          {
            p_name: "Accessories (Handbags, Shoes)",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
      ],
    },
    {
      id: "2423",
      name: "Khaadi",
      category: "Clothing and Apparel",
      description:"Khaadi is a well-known brand offering a diverse range of clothing, including traditional and contemporary designs for men, women, and children.",
      brand_logo: National,
      website_url: "wwww.khaadi.com",
      founder: "Shamoon Sultan",
      products: [
        {
          p_name: "Unstitched Lawn Suits",
          p_category: "Clothing and Apparel",
          p_img: National,
        },
        {
            p_name: "Accessories (Scarves, Bags, Jewelry)",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
          {
            p_name: "Kids' Clothing",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
      ],
    },
    {
      id: "2424",
      name: "Nishat Linen",
      category: "Clothing and Apparel",
      description:"Nishat Linen is a popular brand offering a wide range of clothing and home textiles, known for its stylish and contemporary designs.",
      brand_logo: National,
      website_url: "www.nishatlinen.com",
      founder: "Mian Muhammad Mansha",
      products: [
        {
          p_name: "Unstitched Fabric",
          p_category: "Clothing and Apparel",
          p_img: National,
        },
        {
            p_name: "Bedsheets and Bedding",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
          {
            p_name: "Pret Wear",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
      ],
    },
    {
      id: "2425",
      name: "ChenOne",
      category: "Clothing and Apparel",
      description:"ChenOne is a lifestyle brand offering clothing, home textiles, and accessories, known for its modern and trendy designs.",
      brand_logo: National,
      website_url: "www.chenone.com",
      founder: "Mian Muhammad Latif",
      products: [
        {
          p_name: "Men's and Women's Clothing",
          p_category: "Clothing and Apparel",
          p_img: National,
        },
        {
            p_name: "Bed Linen and Bedding",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
          {
            p_name: "Towels and Bath Accessories",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
      ],
    },
    {
      id: "2426",
      name: "Sapphire",
      category: "Clothing and Apparel",
      description:"Sapphire is a popular brand offering a diverse range of clothing, including unstitched fabric, ready-to-wear collections, and accessories.",
      brand_logo: National,
      website_url: "www.sapphireonline.pk",
      founder: "Nabeel Abdullah",
      products: [
        {
          p_name: "Unstitched Fabrics",
          p_category: "Clothing and Apparel",
          p_img: National,
        },
        {
            p_name: "Ready-to-Wear Collections",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
          {
            p_name: "Kurtas and Tops",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
      ],
    },
    {
      id: "2427",
      name: "Gul Ahmed",
      category: "Clothing and Apparel",
      description:"Gul Ahmed is a leading textile and apparel brand, known for its high-quality fabrics and a wide range of clothing options for all seasons.",
      brand_logo: National,
      website_url: "www.gulahmedshop.com",
      founder: "Haji Ali Mohammad",
      products: [
        {
          p_name: "Lawn and Cotton Suits",
          p_category: "Clothing and Apparel",
          p_img: National,
        },
        {
            p_name: "Formal and Casual Wear",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
          {
            p_name: "Men's and Women's Clothing",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
      ],
    },
    {
      id: "2428",
      name: "J. (Junaid Jamshed)",
      category: "Clothing and Apparel",
      description:"Junaid Jamshed is a brand offering traditional and modest clothing, including eastern wear, perfumes, and accessories.",
      brand_logo: National,
      website_url: "www.junaidjamshed.com",
      founder: "Junaid Jamshed",
      products: [
        {
          p_name: "Traditional Shalwar Kameez",
          p_category: "Clothing and Apparel",
          p_img: National,
        },
        {
            p_name: "Fragrances and Perfumes",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
          {
            p_name: "Accessories (Scarves, Jewelry)",
            p_category: "Clothing and Apparel",
            p_img: National,
          },
      ],
    },
    {
      id: "2431",
      name: "Qarshi Industries",
      category: "Medications and Health Products",
      description:"Qarshi Industries is a well-known brand offering a range of herbal and natural health products, including supplements, tonics, and herbal remedies.",
      brand_logo: National,
      website_url: "www.qarshi.com",
      founder: "Hakeem Muhammad Saeed",
      products: [
        {
          p_name: "Joshanda",
          p_category: "Medications and Health Products",
          p_img: National,
        },
        {
            p_name: "Sharbat-e-Faulad",
            p_category: "Medications and Health Products",
            p_img: National,
          },
          {
            p_name: "Jam-e-Shirin",
            p_category: "Medications and Health Products",
            p_img: National,
          },
      ],
    },
    {
      id: "2432",
      name: "Hamdard Pakistan",
      category: "Medications and Health Products",
      description:"Hamdard Pakistan is a renowned brand specializing in natural and herbal medicines, dietary supplements, and health and wellness products.",
      brand_logo: National,
      website_url: "www.hamdard.com.pk",
      founder: "Hakeem Muhammad Saeed",
      products: [
        {
          p_name: "Rooh Afza",
          p_category: "Medications and Health Products",
          p_img: National,
        },
        {
            p_name: "Safi",
            p_category: "Medications and Health Products",
            p_img: National,
          },
          {
            p_name: "Sualin",
            p_category: "Medications and Health Products",
            p_img: National,
          },
      ],
    },
    {
      id: "2433",
      name: "Sami Pharmaceutical Company Ltd",
      category: "Medications and Health Products",
      description:"Sami Pharmaceutical Company Ltd focuses on pharmaceuticals, offering a variety of medicines and healthcare products for various medical conditions.",
      brand_logo: National,
      website_url: "www.samipharmapk.com",
      founder: "Shamim Ahmed(Chairman)",
      products: [
        {
          p_name: "Ciprobac",
          p_category: "Medications and Health Products",
          p_img: National,
        },
        {
            p_name: "Zymaxid",
            p_category: "Medications and Health Products",
            p_img: National,
          },
          {
            p_name: "Fibrozil",
            p_category: "Medications and Health Products",
            p_img: National,
          },
      ],
    },
    {
      id: "2434",
      name: "Martin Dow",
      category: "Medications and Health Products",
      description:"Martin Dow is a pharmaceutical company producing a wide range of medications, including prescription drugs, over-the-counter medicines, and healthcare products.",
      brand_logo: National,
      website_url: "www.martindow.com",
      founder: "Jawed Akhai",
      products: [
        {
          p_name: "Brufen",
          p_category: "Medications and Health Products",
          p_img: National,
        },
        {
            p_name: "Cardiprin",
            p_category: "Medications and Health Products",
            p_img: National,
          },
          {
            p_name: "Panadol",
            p_category: "Medications and Health Products",
            p_img: National,
          },
      ],
    },
    {
      id: "2435",
      name: "Hilton Pharma Limited",
      category: "Medications and Health Products",
      description:"Hilton Pharma Limited is a leading pharmaceutical company offering a diverse range of medicines, healthcare products, and medical solutions.",
      brand_logo: National,
      website_url: "www.hiltonpharma.com",
      founder: "Yusuf H. Shirazi",
      products: [
        {
          p_name: "Ostocalcium",
          p_category: "Medications and Health Products",
          p_img: National,
        },
        {
            p_name: "Koflet",
            p_category: "Medications and Health Products",
            p_img: National,
          },
          {
            p_name: "Fevadol",
            p_category: "Medications and Health Products",
            p_img: National,
          },
      ],
    },
    {
      id: "2436",
      name: "Getz Pharmaceutical Company Ltd",
      category: "Medications and Health Products",
      description:"Getz Pharmaceutical Company Ltd specializes in pharmaceuticals and healthcare products, providing a wide range of medications for various therapeutic areas.",
      brand_logo: National,
      website_url: "www.getzpharma.com",
      founder: "Khalid Mahmood (CEO)",
      products: [
        {
          p_name: "Ciplox",
          p_category: "Medications and Health Products",
          p_img: National,
        },
        {
            p_name: "Dironorm",
            p_category: "Medications and Health Products",
            p_img: National,
          },
          {
            p_name: "Gynaset",
            p_category: "Medications and Health Products",
            p_img: National,
          },
      ],
    },
    {
      id: "2437",
      name: "Ferozsons Laboratories Limited",
      category: "Medications and Health Products",
      description:"Ferozsons Laboratories Limited is a pharmaceutical company offering a wide range of medicines, healthcare products, and medical devices.",
      brand_logo: National,
      website_url: "www.ferozsons-labs.com",
      founder: "Osman Khalid Waheed (CEO)",
      products: [
        {
          p_name: "Calnic",
          p_category: "Medications and Health Products",
          p_img: National,
        },
        {
            p_name: "Nebicard",
            p_category: "Medications and Health Products",
            p_img: National,
          },
          {
            p_name: "Gastromotil",
            p_category: "Medications and Health Products",
            p_img: National,
          },
      ],
    },
    {
      id: "2438",
      name: "Pak Elektron Limited (PEL)",
      category: "Electronics & Home appliances",
      description:"PEL is a leading electronics and home appliances brand, manufacturing a variety of products such as refrigerators, air conditioners, and washing machines.",
      brand_logo: National,
      website_url: "www.pel.com.pk",
      founder: "Muhammad Naseem Saigol (Chairman)",
      products: [
        {
          p_name: "Refrigerators",
          p_category: "Electronics & Home appliances",
          p_img: National,
        },
        {
            p_name: "Air Conditioners",
            p_category: "Electronics & Home appliances",
            p_img: National,
          },
          {
            p_name: "Microwaves",
            p_category: "Electronics & Home appliances",
            p_img: National,
          },
          {
            p_name: "LED TVs",
            p_category: "Electronics & Home appliances",
            p_img: National,
          },
      ],
    },
    {
      id: "2439",
      name: "Dawlance",
      category: "Electronics & Home appliances",
      description:"Dawlance is a well-known brand specializing in home appliances, including refrigerators, air conditioners, and kitchen appliances.",
      brand_logo: National,
      website_url: "www.dawlance.com.pk",
      founder: "Bashir Dawood",
      products: [
        {
          p_name: "Refrigerators",
          p_category: "Electronics & Home appliances",
          p_img: National,
        },
        {
            p_name: "Air Conditioners",
            p_category: "Electronics & Home appliances",
            p_img: National,
          },
          {
            p_name: "Kitchen Appliances",
            p_category: "Electronics & Home appliances",
            p_img: National,
          },
      ],
    },
    {
      id: "2440",
      name: "Gaba National Electronics",
      category: "Electronics & Home appliances",
      description:"Gaba National Electronics is a brand offering a diverse range of home appliances, including fans, blenders, and kitchen appliances.",
      brand_logo: National,
      website_url: "estore.gabanational.net.pk",
      founder: "",
      products: [
        {
          p_name: "Fans",
          p_category: "Electronics & Home appliances",
          p_img: National,
        },
        {
            p_name: "Heaters",
            p_category: "Electronics & Home appliances",
            p_img: National,
          },
          {
            p_name: "Blenders",
            p_category: "Electronics & Home appliances",
            p_img: National,
          },
          {
            p_name: "Kitchen Appliances",
            p_category: "Electronics & Home appliances",
            p_img: National,
          },
      ],
    },
    {
      id: "2441",
      name: "Super Asia",
      category: "Electronics & Home appliances",
      description:"Super Asia is a well-established brand manufacturing a variety of home appliances, including washing machines, air coolers, and room heaters.",
      brand_logo: National,
      website_url: "www.superasiastore.com",
      founder: "Mian Muhammad Din",
      products: [
        {
          p_name: "Washing Machines",
          p_category: "Electronics & Home appliances",
          p_img: National,
        },
        {
            p_name: "Air Coolers",
            p_category: "Electronics & Home appliances",
            p_img: National,
          },
          {
            p_name: "Room Heaters",
            p_category: "Electronics & Home appliances",
            p_img: National,
          },
      ],
    },
    {
      id: "2442",
      name: "G.F.C Fans",
      category: "Electronics & Home appliances",
      description:"G.F.C Fans is a leading brand in the fan industry, offering a range of ceiling fans, pedestal fans, and exhaust fans.",
      brand_logo: National,
      website_url: "www.gfcfans.com",
      founder: "G.F.C Group",
      products: [
        {
          p_name: "Ceiling Fans",
          p_category: "Electronics & Home appliances",
          p_img: National,
        },
        {
            p_name: "Exhaust Fans",
            p_category: "Electronics & Home appliances",
            p_img: National,
          },
          {
            p_name: "Pedestal Fans",
            p_category: "Electronics & Home appliances",
            p_img: National,
          },
      ],
    },
  ],
};

export const brandsSlice = createSlice({
  name: "companiesdata",
  initialState,
  reducers: {},
});


export default brandsSlice.reducer;
