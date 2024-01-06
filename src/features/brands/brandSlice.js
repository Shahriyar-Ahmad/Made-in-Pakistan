import { createSlice } from "@reduxjs/toolkit";


// Images Import
// No Images logo Import
import NoImage from "../../all images/Else Pics/No image.png";
// National Img Import
import National from "../../all images/National Foods/Logo.jpg";
import NationalMasalay from "../../all images/National Foods/National Masalay.jpg";
import NationalSalt from "../../all images/National Foods/National Salt.jpg";
import NationalTomatoKetchup from "../../all images/National Foods/National Tomato Ketchup.jpg";
// EBM Img Import
import EBM from "../../all images/EBM Peek Freans/Logo.png";
import Sooper from "../../all images/EBM Peek Freans/Sooper.jpg";
import RIO from "../../all images/EBM Peek Freans/RIO.jpg";
import Gluco from "../../all images/EBM Peek Freans/Gluco.jpg";
// Continental Biscuits Limited Img Import
import ContinentalBiscuits from "../../all images/Continental Biscuits Limited/Logo.jpg";
import Oreo from "../../all images/Continental Biscuits Limited/Oreo.png";
import Prince from "../../all images/Continental Biscuits Limited/Prince.jpg";
import TUC from "../../all images/Continental Biscuits Limited/TUC.jpg";
// Ismail Industries Limited Limited Img Import
import IsmailIndustries from "../../all images/Ismail Industries Limited/Logo.jpg";
import Bisconi from "../../all images/Ismail Industries Limited/Bisconi.jpg";
import CandyLand from "../../all images/Ismail Industries Limited/CandyLand.png";
import SnackCity from "../../all images/Ismail Industries Limited/SnackCity.jpg";
// ShanFood Img Import
import ShanFood from "../../all images/Shan Foods/Logo.png";
import ShanSauces from "../../all images/Shan Foods/Sauces.jpg";
import ShanChaat from "../../all images/Shan Foods/Shan Chaat.jpg";
// Mitchell Img Import
import Mitchells from "../../all images/Mitchell's Fruit Farms/Logo.png";
import MitchellsBeverage from "../../all images/Mitchell's Fruit Farms/Mitchell's Beverages.jpg";
import MitchellsKetchup from "../../all images/Mitchell's Fruit Farms/Mitchell's Ketchup & Sauces.jpg";
// TapalTea Img Import
import TapalTea from "../../all images/Tapal Tea/Logo.png";
import TapalDanedar from "../../all images/Tapal Tea/Tapal Danedar.jpg";
import TapalTezdum from "../../all images/Tapal Tea/Tapal Tezdum.jpg";
import TapalFM from "../../all images/Tapal Tea/Tapal Family Mixture.jpg";
// Sufi Img Import
import Sufi from "../../all images/Sufi/Sufi.jpg";
import SufiCookingOil from "../../all images/Sufi/Sufi Cooking Oil.jpg";
import SufiDetergent from "../../all images/Sufi/Sufi Detergent.jpg";
import SufiWater from "../../all images/Sufi/Sufi Water.jpg";
// FrieslandCampina Engro Pakistan Limited Img Import
import FrieslandCampinaEngro from "../../all images/FrieslandCampina Engro Pakistan Limited/Logo.png";
import Olper from "../../all images/FrieslandCampina Engro Pakistan Limited/Olper's.jpg";
import Omore from "../../all images/FrieslandCampina Engro Pakistan Limited/Omore.jpg";
import Tarang from "../../all images/FrieslandCampina Engro Pakistan Limited/Tarang.jpg";
// Dalda Foood Img Import
import DaldaFood from "../../all images/Dalda Food Limited/Logo.png";
import DaldaCookingOil from "../../all images/Dalda Food Limited/Dalda Cooking Oil.jpg";
import Manpasand from "../../all images/Dalda Food Limited/Manpasand Coking Oil.jpg";
import CupShup from "../../all images/Dalda Food Limited/Cup Shup.jpg";
// Gourmet Foods Img Import
import GourmetFood from "../../all images/Gourmet Foods/Logo.png";
import GourmetBakeryProduct from "../../all images/Gourmet Foods/Gourmet Bakery Products.jpg";
import GourmetCola from "../../all images/Gourmet Foods/Gourmet Cola.jpg";
// Pakola Img Import
import PakolaLogo from "../../all images/Pakola Products Limited/Logo.jpg";
import Pakola from "../../all images/Pakola Products Limited/Pakola.jpg";
import AppleSidra from "../../all images/Pakola Products Limited/Apple Sidra.jpg";
import PakolaWater from "../../all images/Pakola Products Limited/Pakola Water.jpg";
// HilalFood Img Import
import HilalFood from "../../all images/Hilal Foods/Logo.png";
import HilalCupKake from "../../all images/Hilal Foods/Cup Kake.jpg";
import DingDong from "../../all images/Hilal Foods/Ding Dong.jpg";
// HaleebProducts Img Import
import Haleeb from "../../all images/Haleeb Foods Limited/Logo.jpg";
import HaleebMilk from "../../all images/Haleeb Foods Limited/Haleeb Packed Milk.jpg";
import HaleebCareem from "../../all images/Haleeb Foods Limited/Haleeb Dairy Cream.jpg";
import HaleebTropico from "../../all images/Haleeb Foods Limited/Haleeb Tropico.jpg";
// Sufi Img Import
import VolkaFood from "../../all images/Volka Foods/Logo.png";
import BoomBoom from "../../all images/Volka Foods/Boom Boom.jpg";
import TeaTime from "../../all images/Volka Foods/Tea Time.jpg";
// DawnBread Img Import
import Dawn from "../../all images/Dawn Bread/Logo.png";
import DawnBread from "../../all images/Dawn Bread/Dawn Bread.jpg";
import DawnBurgerBun from "../../all images/Dawn Bread/Burger Bun.jpg";
// Saeed Ghani Img Import
import SaeedGhani from "../../all images/Saeed Ghani/Logo.png";
import SaeedGhaniSkinCare from "../../all images/Saeed Ghani/SkinCare Products.jpg";
import SaeedGhaniHairCare from "../../all images/Saeed Ghani/HairCare Products.jpg";
import SaeedGhaniFragrances from "../../all images/Saeed Ghani/Fragrances.jpg";
// PrimaryCare Img Import
import PrimaryCare from "../../all images/Primary Skincare/Logo.png";
import PrimaryCareSkinCare from "../../all images/Primary Skincare/Simple Skincare Solutions.webp";
import PrimaryCareCleaner from "../../all images/Primary Skincare/Natural Face Cleansers.jpg";
import PrimaryCareSkinCareKit from "../../all images/Primary Skincare/Minimalist Skincare Kits.jpg";
// Conatural Img Import
import Conatural from "../../all images/Conatural/Logo.png";
import ConaturalSkinCare from "../../all images/Conatural/Organic Skincare Products.jpg";
import ConaturalHairCare from "../../all images/Conatural/Hair Care Treatments.jpg";
import ConaturalBodyCare from "../../all images/Conatural/Body Care Items (Soaps, Lotions).jpg";
// BBA Img Import
import BBA from "../../all images/Beautify by Amna/Logo.jpg";
import BBASkinCare from "../../all images/Beautify by Amna/Beauty and Skincare Products.jpg";
import BBAMakeupEs from "../../all images/Beautify by Amna/Makeup Essentials.jpg";
import BBABeautyTools from "../../all images/Beautify by Amna/Beauty Tools and Accessories.webp";
// LepurOranganic Img Import
import Lepur from "../../all images/Le Pur Organics/Logo.png";
import LepurBeautyProduct from "../../all images/Le Pur Organics/Clean Beauty Products.jpg";
import LepurSkinCare from "../../all images/Le Pur Organics/Organic and Natural Skincare.jpg";
import LepurSoap from "../../all images/Le Pur Organics/Handcrafted Soaps.jpg";
// VinceCare Img Import
import Vince from "../../all images/Vince Care/Logo.jpg";
import VinceSkinCare from "../../all images/Vince Care/Quality Skincare Solutions.jpg";
import VinceHairCare from "../../all images/Vince Care/Hair Care Products.webp";
import VinceCleaner from "../../all images/Vince Care/Cleansers and Toners.webp";
// Nutrifactor Img Import
import Nutrifactor from "../../all images/Nutrifactor/Logo.jpg";
import NutrifactorCollagen from "../../all images/Nutrifactor/Collagen Boosting Formulas.jpg";
import NutrifactorSkinCareSupplement from "../../all images/Nutrifactor/Nutritional Supplements for Skin Health.jpg";
import NutrifactorViamins from "../../all images/Nutrifactor/Skincare Vitamins and Minerals.jpg";
// PEL Img Import
import PEL from "../../all images/Pak Elektron Limited (PEL)/Logo.png";
import PELRefrigerators from "../../all images/Pak Elektron Limited (PEL)/Refrigerators.jpg";
import PELAirConditioners from "../../all images/Pak Elektron Limited (PEL)/Air Conditioners.webp";
import PELMicrowaves from "../../all images/Pak Elektron Limited (PEL)/Microwaves.webp";
import PELLED from "../../all images/Pak Elektron Limited (PEL)/LED.jpg";
// Dawlance Img Import
import Dawlance from "../../all images/Dawlance/Logo.png";
import DawlanceRefrigerators from "../../all images/Dawlance/Refrigerators.jpg";
import DawlanceAirConditioners from "../../all images/Dawlance/Air Conditioners.webp";
import DawlanceKitchenAppliances from "../../all images/Dawlance/Kitchen Appliances.jpg";
// GabaNational Img Import
import GabaNational from "../../all images/Gaba National Electronics/Logo.jpg";
import GabaNationalFans from "../../all images/Gaba National Electronics/Fans.jpg";
import GabaNationalHeaters from "../../all images/Gaba National Electronics/Heaters.webp";
import GabaNationalBlender from "../../all images/Gaba National Electronics/Blenders.jpg";
import GabaNationalKitchenAppliances from "../../all images/Gaba National Electronics/Kitchen Appliances.jpg";
// SuperAsia Img Import
import SuperAsia from "../../all images/Super Asia/Logo.webp";
import SuperAsiaAirCooler from "../../all images/Super Asia/Air Coolers.jpg";
import SuperAsiaHeaters from "../../all images/Super Asia/Room Heaters.jpg";
import SuperAsiaWashingMachines from "../../all images/Super Asia/Washing Machines.jpg";
// GFCFans Img Import
import GFC from "../../all images/G.F.C Fans/Logo.png";
import GFCCeilingFans from "../../all images/G.F.C Fans/Ceiling Fans.jpg";
import GFCExhaustFans from "../../all images/G.F.C Fans/Exhaust Fans.png";
import GFCPedestalFans from "../../all images/G.F.C Fans/Pedestal Fans.jpg";
// Qarshi Industries Img Import
import QarshiINdustries from "../../all images/Qarshi Industries/Logo.jpg";
import JameShirin from "../../all images/Qarshi Industries/Jam-e-Shirin.jpg";
import Joshanda from "../../all images/Qarshi Industries/Joshanda.jpg";
import SharbateFaulad from "../../all images/Qarshi Industries/Sharbat-e-Faulad.jpg";
// Hamdard Pakistan Img Import
import Hamdard from "../../all images/Hamdard Pakistan/Logo.png";
import RoohAfza from "../../all images/Hamdard Pakistan/Rooh Afza.jpg";
import HamdardSafi from "../../all images/Hamdard Pakistan/Safi.jpg";
import HamdardSualin from "../../all images/Hamdard Pakistan/Sualin.jpg";
// Bareeze Img Import
import Bareeze from "../../all images/Bareeze/Logo.png";
// AlKaram Studio Img Import
import AlKaramStudio from "../../all images/Alkaram Studio/Logo.jpg";
import AlKaramStudioHandbags from "../../all images/Alkaram Studio/Accessories (Handbags, Shoes).jpg";
import AlKaramStudioHT from "../../all images/Alkaram Studio/Home Textiles.jpg";
// ChenOne Img Import
import ChenOne from "../../all images/ChenOne/Logo.jpg";
import ChenOneBedLinen from "../../all images/ChenOne/Bed Linen and Bedding.jpg";
import ChenOneTowels from "../../all images/ChenOne/Towels and Bath Accessories.jpg";
// Khaadi Img Import
import Khaadi from "../../all images/Khaadi/Logo.png";
import KhaadiBags from "../../all images/Khaadi/Bags.jpg";
// Sapphire Img Import
import Sapphire from "../../all images/Sapphire/Logo.png"; 
// Nishat Linen Img Import
import NishatLinen from "../../all images/Nishat Linen/Logo.png";
import NishatLinenBedsheets from "../../all images/Nishat Linen/Bedsheets and Bedding.jpg";
// J. (Junaid Jamshed) Img Import
import JunaidJamshed from "../../all images/J. (Junaid Jamshed)/Logo.png";
import JunaidJamshedJewelry from "../../all images/J. (Junaid Jamshed)/Accessories (Scarves, Jewelry).jpg";
import JunaidJamshedFragrances from "../../all images/J. (Junaid Jamshed)/Fragrances and Perfumes.jpg";
import JunaidJamshedShalwarKameez from "../../all images/J. (Junaid Jamshed)/Traditional Shalwar Kameez.jpg";
// GulAhmed Img Import
import GulAhmed from "../../all images/Gul Ahmed/Logo.png";
// MartinDow Img Import
import MartinDow from "../../all images/Martin Dow/Logo.jpg";
// Hilton Pharma Limited Img Import
import HiltonPharma from "../../all images/Hilton Pharma Limited/Logo.png";
// Getz Pharmaceutical Company Ltd Img Import
import GetzPharmaceutical from "../../all images/Getz Pharmaceutical Company Ltd/Logo.png";
import GetzPharmaceuticalCiplox from "../../all images/Getz Pharmaceutical Company Ltd/Ciplox.webp";
// SamiPharma Img Import
import SamiPharma from "../../all images/Sami Pharmaceutical Company Ltd/Logo.png";
// Ferozsons Laboratories Limited Img Import
import FerozsonsLaboratories from "../../all images/Ferozsons Laboratories Limited/Logo.png";
// hg
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
          p_img: NationalMasalay,
        },
        {
            p_name: "National Tomato Ketchup",
            p_category: "Groceries",
            p_img: NationalTomatoKetchup,
          },
          {
            p_name: "National Salt",
            p_category: "Groceries",
            p_img: NationalSalt,
          },
      ],
    },
    {
      id: "2402",
      name: "EBM Peek Freans",
      category: "Food & Beverage",
      description:"EBM is a leading biscuit manufacturer in Pakistan, producing a wide range of biscuits and baked snacks.",
      brand_logo: EBM,
      website_url: "www.ebm.com.pk",
      founder: "Khawar Masood Butt",
      products: [
        {
          p_name: "Sooper",
          p_category: "Food & Beverage",
          p_img: Sooper,
        },
        {
            p_name: "RIO",
            p_category: "Food & Beverage",
            p_img: RIO,
          },
          {
            p_name: "Gluco",
            p_category: "Food & Beverage",
            p_img: Gluco,
          },
      ],
    },
    {
      id: "2403",
      name: "Continental Biscuits Limited",
      category: "Food & Beverage",
      description:"Continental Biscuits Limited is a prominent biscuit and snack manufacturer, offering popular biscuits like LU and TUC.",
      brand_logo: ContinentalBiscuits,
      website_url: "www.continentalbiscuits.com.pk",
      founder: "Hasan Ali Khan",
      products: [
        {
          p_name: "TUC",
          p_category: "Food & Beverage",
          p_img: TUC,
        },
        {
            p_name: "Oreo",
            p_category: "Food & Beverage",
            p_img: Oreo,
          },
          {
            p_name: "Prince",
            p_category: "Foods and Beverages",
            p_img: Prince,
          },
      ],
    },
    {
      id: "2404",
      name: "Ismail Industries Limited",
      category: "Food & Beverage",
      description:"Ismail Industries Limited is a diversified company producing a variety of snacks and beverages, including candies, toffees, and dairy products. It is owner of popular brands like Candyland, Bisconi, and SnackCity.",
      brand_logo: IsmailIndustries,
      website_url: "www.ismailindustries.com.pk",
      founder: "Muhammad Ismail",
      products: [
        {
          p_name: "CandyLand",
          p_category: "Food & Beverage",
          p_img: CandyLand,
        },
        {
            p_name: "Bisconi",
            p_category: "Food & Beverage",
            p_img: Bisconi,
          },
          {
            p_name: "SnackCity",
            p_category: "Food & Beverage",
            p_img: SnackCity,
          },
      ],
    },
    {
      id: "2405",
      name: "Shan Foods",
      category: "Groceries",
      description:"Shan Foods is a renowned brand offering a diverse range of spice mixes, recipe mixes, and food products to enhance the culinary experience.",
      brand_logo: ShanFood,
      website_url: "www.shanfoods.com",
      founder: "Sikander Sultan",
      products: [
        {
          p_name: "Sauces",
          p_category: "Groceries",
          p_img: ShanSauces,
        },
          {
            p_name: "Shan Chaat",
            p_category: "Groceries",
            p_img: ShanChaat,
          },
      ],
    },
    {
      id: "2406",
      name: "Mitchell's Fruit Farms",
      category: "Groceries",
      description:"Mitchell's Fruit Farms is known for its wide range of fruit-based products, including jams, juices, and canned fruits.",
      brand_logo: Mitchells,
      website_url: "www.mitchells.com.pk",
      founder: "Francis J. Mitchell",
      products: [
        {
          p_name: "Mitchell's Beverages",
          p_category: "Groceries",
          p_img: MitchellsBeverage,
        },
        {
            p_name: "Mitchell's Ketchup & Sauces",
            p_category: "Groceries",
            p_img: MitchellsKetchup,
          },
      ],
    },
    {
      id: "2407",
      name: "Tapal Tea",
      category: "Groceries",
      description:"Tapal Tea is a prominent tea company, known for its wide range of tea blends, offering a flavorful experience to tea enthusiasts.",
      brand_logo: TapalTea,
      website_url: "www.tapaltea.com",
      founder: "Adam Ali Tapal",
      products: [
        {
          p_name: "Tapal Danedar",
          p_category: "Groceries",
          p_img: TapalDanedar,
        },
        {
            p_name: "Tapal Tezdum",
            p_category: "Groceries",
            p_img: TapalTezdum,
          },
          {
            p_name: "Tapal Family Mixture",
            p_category: "Groceriess",
            p_img: TapalFM,
          },
      ],
    },
    {
      id: "2408",
      name: "Sufi",
      category: "Groceries",
      description:"Sufi is a brand offering a variety of food products, including rice and cooking oils, providing essential ingredients for daily meals.",
      brand_logo: Sufi,
      website_url: "www.sufioilandghee.com",
      founder: "Sufi Group",
      products: [
        {
          p_name: "Sufi Cooking Oil",
          p_category: "Groceries",
          p_img: SufiCookingOil,
        },
        {
            p_name: "Sufi Detergent",
            p_category: "Groceries",
            p_img: SufiDetergent,
          },
          {
            p_name: "Sufi Water",
            p_category: "Groceries",
            p_img: SufiWater,
          },
      ],
    },
    {
      id: "2443",
      name: "FrieslandCampina Engro Pakistan Limited",
      category: "Groceries",
      description:"FrieslandCampina Engro Pakistan Limited is a joint venture between FrieslandCampina and Engro Corporation, operating in the dairy industry in Pakistan. The company is involved in milk collection, processing, and the distribution of various dairy products, including milk and yogurt. For the latest information, it's advisable to refer to official sources or the company's website.",
      brand_logo: FrieslandCampinaEngro,
      website_url: "www.engro.com/frieslandcampina/",
      founder: "FrieslandCampina Engro Pakistan ",
      products: [
        {
          p_name: "Olper's",
          p_category: "Groceries",
          p_img: Olper,
        },
        {
            p_name: "Omoré",
            p_category: "Groceries",
            p_img: Omore,
          },
          {
            p_name: "Tarang",
            p_category: "Groceries",
            p_img: Tarang,
          },
      ],
    },
    {
      id: "2409",
      name: "Dalda Food Limited",
      category: "Groceries",
      description:"Dalda Food Limited is a well-known brand offering cooking oils and fats, catering to the cooking and baking needs of households.",
      brand_logo: DaldaFood,
      website_url: "www.daldafoods.com",
      founder: "Dalda",
      products: [
        {
          p_name: "Dalda Cooking Oil",
          p_category: "Groceries",
          p_img: DaldaCookingOil,
        },
        {
            p_name: "Manpasand Coking Oil",
            p_category: "Groceries",
            p_img: Manpasand,
          },
          {
            p_name: "Cup Shup",
            p_category: "Groceries",
            p_img: CupShup,
          },
      ],
    },
    {
      id: "2410",
      name: "Gourmet Foods",
      category: "Food & Beverage",
      description:"Gourmet Foods is a leading food company, operating in the bakery, dairy, and food services sectors, providing a wide range of products.",
      brand_logo: GourmetFood,
      website_url: "www.gourmetpakistan.com",
      founder: "Gourmet Group",
      products: [
        {
          p_name: "Gourmet Bakery Products",
          p_category: "Food & Beverage",
          p_img: GourmetBakeryProduct,
        },
        {
            p_name: "Gourmet Cola",
            p_category: "Food & Beverage",
            p_img: GourmetCola,
          },
      ],
    },
    {
      id: "2411",
      name: "Pakola Products Limited",
      category: "Food & Beverage",
      description:"Pakola is a popular brand in the beverage industry, offering a range of flavored carbonated drinks.",
      brand_logo: PakolaLogo,
      website_url: "www.pakola.com.pk",
      founder: "Bashir Ahmed Sheikh",
      products: [
        {
          p_name: "Apple Sidra",
          p_category: "Food & Beverage",
          p_img: AppleSidra,
        },
        {
            p_name: "Pakola",
            p_category: "Food & Beverage",
            p_img: Pakola,
          },
          {
            p_name: "Pakola Water",
            p_category: "Food & Beverage",
            p_img: PakolaWater,
          },
      ],
    },
    {
      id: "2412",
      name: "Hilal Foods",
      category: "Food & Beverage",
      description:"Hilal Foods is a prominent food company in Pakistan, specializing in the production of snacks, culinary products, and frozen foods.",
      brand_logo: HilalFood,
      website_url: "www.hilalfoods.com.pk",
      founder: "Iqbal Ahmed",
      products: [
        {
            p_name: "Cup Kake",
            p_category: "Food & Beverage",
            p_img: HilalCupKake,
          },
          {
            p_name: "Ding Dong",
            p_category: "Food & Beverage",
            p_img: DingDong,
          },
      ],
    },
    {
      id: "2413",
      name: "Haleeb Foods Limited",
      category: "Groceries",
      description:"Haleeb Foods is a leading dairy company, known for its dairy products, including milk, yogurt, and desserts.",
      brand_logo: Haleeb,
      website_url: "www.haleebfoods.com",
      founder: "Chaudhry Abdul Majeed",
      products: [
        {
          p_name: "Haleeb Packed Milk",
          p_category: "Groceries",
          p_img: HaleebMilk,
        },
        {
            p_name: "Haleeb Dairy Cream",
            p_category: "Groceries",
            p_img: HaleebCareem,
          },
          {
            p_name: "Haleeb Tropico",
            p_category: "Groceries",
            p_img: HaleebTropico,
          },
      ],
    },
    {
      id: "2414",
      name: "Volka Foods",
      category: "Foods and Beverages",
      description:"Volka Food company is popular food company owner of boom booms bubble parent company.",
      brand_logo: VolkaFood,
      website_url: "www.volkafood.com",
      founder: "Saim Zulfiqar (CEO)",
      products: [
        {
          p_name: "Boom Boom",
          p_category: "Foods and Beverages",
          p_img: BoomBoom,
        },
        {
            p_name: "Tea Time",
            p_category: "Foods and Beverages",
            p_img: TeaTime,
          },
      ],
    },
    {
      id: "2415",
      name: "Dawn Bread",
      category: "Groceries",
      description:"Dawn Bread is a popular bakery brand, producing a variety of bread and bakery products for consumers in Pakistan.",
      brand_logo: Dawn,
      website_url: "www.dawnbread.com",
      founder: "Hassan Ali Khan",
      products: [
        {
          p_name: "Dawn Bread",
          p_category: "Groceries",
          p_img: DawnBread,
        },
        {
            p_name: "Burger Bun",
            p_category: "Groceries",
            p_img: DawnBurgerBun,
          },
      ],
    },
    {
      id: "2416",
      name: "Saeed Ghani",
      category: "Personal Care",
      description:"Saeed Ghani is a renowned brand known for its traditional and herbal personal care products, including oils, soaps,fragrances and skincare items.",
      brand_logo: SaeedGhani,
      website_url: "www.saeedghani.pk",
      founder: "Saeed Ghani",
      products: [
        {
          p_name: "SkinCare Products",
          p_category: "Personal Care",
          p_img: SaeedGhaniSkinCare,
        },
        {
            p_name: "HairCare Products",
            p_category: "Personal Care",
            p_img: SaeedGhaniHairCare,
          },
          {
            p_name: "Fragrances",
            p_category: "Personal Care",
            p_img: SaeedGhaniFragrances,
          },
      ],
    },
    {
      id: "2417",
      name: "Primary Skincare",
      category: "Personal Care",
      description:"Primary Skincare is a brand that focuses on creating effective and simple skincare solutions, emphasizing the importance of natural ingredients.",
      brand_logo: PrimaryCare,
      website_url: "www.primaryskincare.co",
      founder: "Nida Fasil",
      products: [
        {
          p_name: "Simple Skincare Solutions",
          p_category: "Personal Care",
          p_img: PrimaryCareSkinCare,
        },
        {
            p_name: "Natural Face Cleansers",
            p_category: "Personal Care",
            p_img: PrimaryCareCleaner,
          },
          {
            p_name: "Minimalist Skincare Kits",
            p_category: "Personal Care",
            p_img: PrimaryCareSkinCareKit,
          },
      ],
    },
    {
      id: "2418",
      name: "Conatural",
      category: "Personal Care",
      description:"Conatural is a brand dedicated to providing organic and natural personal care products, including skincare, hair care, and body care items.",
      brand_logo: Conatural,
      website_url: "www.conaturalintl.com",
      founder: "Myra Qureshi",
      products: [
        {
          p_name: "Organic Skincare Products",
          p_category: "Personal Care",
          p_img: ConaturalSkinCare,
        },
        {
            p_name: "Hair Care Treatments",
            p_category: "Personal Care",
            p_img: ConaturalHairCare,
          },
          {
            p_name: "Body Care Items (Soaps, Lotions)",
            p_category: "Personal Care",
            p_img: ConaturalBodyCare,
          },
      ],
    },
    {
      id: "2419",
      name: "Vince Care",
      category: "Personal Care",
      description:"Vince Care is a brand that specializes in personal care products, including skincare and hair care items, with a focus on quality and innovation.",
      brand_logo: Vince,
      website_url: "www.vincecare.com",
      founder: "MABLAY BEAUTY (Pvt.) Ltd",
      products: [
        {
          p_name: "Quality Skincare Solutions",
          p_category: "Personal Care",
          p_img: VinceSkinCare,
        },
        {
            p_name: "Hair Care Products",
            p_category: "Personal Care",
            p_img: VinceHairCare,
          },
          {
            p_name: "Cleansers and Toners",
            p_category: "Personal Care",
            p_img: VinceCleaner,
          },
      ],
    },
    {
      id: "2420",
      name: "Beautify by Amna",
      category: "Personal Care",
      description:"Beautify by Amna is a brand known for its beauty and skincare products, offering a variety of solutions for a radiant and healthy appearance.",
      brand_logo: BBA,
      website_url: "www.beautifybyamna.com",
      founder: "Amna Farhad",
      products: [
        {
          p_name: "Beauty and Skincare Products",
          p_category: "Personal Care",
          p_img: BBASkinCare,
        },
        {
            p_name: "Makeup Essentials",
            p_category: "Personal Care",
            p_img: BBAMakeupEs,
          },
          {
            p_name: "Beauty Tools and Accessories",
            p_category: "Personal Care",
            p_img: BBABeautyTools,
          },
      ],
    },
    {
      id: "2429",
      name: "Nutrifactor",
      category: "Personal Care",
      description:"Nutrifactor is a brand that combines nutrition and skincare, providing products that aim to enhance overall well-being and promote healthy skin.",
      brand_logo: Nutrifactor,
      website_url: "www.nutrifactor.com.pk",
      founder: "Amjad Ali(CEO)",
      products: [
        {
          p_name: "Nutritional Supplements for Skin Health",
          p_category: "Personal Care",
          p_img: NutrifactorSkinCareSupplement,
        },
        {
            p_name: "Collagen Boosting Formulas",
            p_category: "Personal Care",
            p_img: NutrifactorCollagen,
          },
          {
            p_name: "Skincare Vitamins and Minerals",
            p_category: "Personal Care",
            p_img: NutrifactorViamins,
          },
      ],
    },
    {
      id: "2430",
      name: "Le Pur Organics",
      category: "Personal Care",
      description:"Le Pur Organics is a brand offering a range of natural and organic skincare products, promoting a clean and holistic approach to personal care.",
      brand_logo: Lepur,
      website_url: "www.lepurorganics.com",
      founder: "Rukhsana Ibad",
      products: [
        {
          p_name: "Organic and Natural Skincare",
          p_category: "Personal Care",
          p_img: LepurSkinCare,
        },
        {
            p_name: "Clean Beauty Products",
            p_category: "Personal Care",
            p_img: LepurBeautyProduct,
          },
          {
            p_name: "Handcrafted Soaps",
            p_category: "Personal Care",
            p_img: LepurSoap,
          },
      ],
    },
    {
      id: "2421",
      name: "Bareeze",
      category: "Clothing and Apparel",
      description:"Bareeze is a well-established brand specializing in high-quality embroidered fabrics, ready-to-wear outfits, and accessories.",
      brand_logo: Bareeze,
      website_url: "www.bareeze.com",
      founder: "Seema Aziz",
      products: [
        {
          p_name: "Embroidered Lawn Suits",
          p_category: "Clothing and Apparel",
          p_img: NoImage,
        },
        {
            p_name: "Chiffon and Silk Collections",
            p_category: "Clothing and Apparel",
            p_img: NoImage,
          },
          {
            p_name: "Ready-to-Wear Outfits",
            p_category: "Clothing and Apparel",
            p_img: NoImage,
          },
      ],
    },
    {
      id: "2422",
      name: "Alkaram Studio",
      category: "Clothing and Apparel",
      description:"Alkaram Studio is a textile and clothing brand, providing a wide range of fabrics, ready-to-wear outfits, and accessories.",
      brand_logo: AlKaramStudio,
      website_url: "www.alkaramstudio.com",
      founder: "Alkaram Group",
      products: [
        {
          p_name: "Men's and Women's Clothing",
          p_category: "Clothing and Apparel",
          p_img: NoImage,
        },
        {
            p_name: "Home Textiles",
            p_category: "Clothing and Apparel",
            p_img: AlKaramStudioHT,
          },
          {
            p_name: "Accessories (Handbags, Shoes)",
            p_category: "Clothing and Apparel",
            p_img: AlKaramStudioHandbags,
          },
      ],
    },
    {
      id: "2423",
      name: "Khaadi",
      category: "Clothing and Apparel",
      description:"Khaadi is a well-known brand offering a diverse range of clothing, including traditional and contemporary designs for men, women, and children.",
      brand_logo: Khaadi,
      website_url: "wwww.khaadi.com",
      founder: "Shamoon Sultan",
      products: [
        {
          p_name: "Unstitched Lawn Suits",
          p_category: "Clothing and Apparel",
          p_img: NoImage,
        },
        {
            p_name: "Accessories (Scarves, Bags, Jewelry)",
            p_category: "Clothing and Apparel",
            p_img: KhaadiBags,
          },
          {
            p_name: "Kids' Clothing",
            p_category: "Clothing and Apparel",
            p_img: NoImage,
          },
      ],
    },
    {
      id: "2424",
      name: "Nishat Linen",
      category: "Clothing and Apparel",
      description:"Nishat Linen is a popular brand offering a wide range of clothing and home textiles, known for its stylish and contemporary designs.",
      brand_logo: NishatLinen,
      website_url: "www.nishatlinen.com",
      founder: "Mian Muhammad Mansha",
      products: [
        {
          p_name: "Unstitched Fabric",
          p_category: "Clothing and Apparel",
          p_img: NoImage,
        },
        {
            p_name: "Bedsheets and Bedding",
            p_category: "Clothing and Apparel",
            p_img: NishatLinenBedsheets,
          },
          {
            p_name: "Pret Wear",
            p_category: "Clothing and Apparel",
            p_img: NoImage,
          },
      ],
    },
    {
      id: "2425",
      name: "ChenOne",
      category: "Clothing and Apparel",
      description:"ChenOne is a lifestyle brand offering clothing, home textiles, and accessories, known for its modern and trendy designs.",
      brand_logo: ChenOne,
      website_url: "www.chenone.com",
      founder: "Mian Muhammad Latif",
      products: [
        {
          p_name: "Men's and Women's Clothing",
          p_category: "Clothing and Apparel",
          p_img: NoImage,
        },
        {
            p_name: "Bed Linen and Bedding",
            p_category: "Clothing and Apparel",
            p_img: ChenOneBedLinen,
          },
          {
            p_name: "Towels and Bath Accessories",
            p_category: "Clothing and Apparel",
            p_img: ChenOneTowels,
          },
      ],
    },
    {
      id: "2426",
      name: "Sapphire",
      category: "Clothing and Apparel",
      description:"Sapphire is a popular brand offering a diverse range of clothing, including unstitched fabric, ready-to-wear collections, and accessories.",
      brand_logo: Sapphire,
      website_url: "www.sapphireonline.pk",
      founder: "Nabeel Abdullah",
      products: [
        {
          p_name: "Unstitched Fabrics",
          p_category: "Clothing and Apparel",
          p_img: NoImage,
        },
        {
            p_name: "Ready-to-Wear Collections",
            p_category: "Clothing and Apparel",
            p_img: NoImage,
          },
          {
            p_name: "Kurtas and Tops",
            p_category: "Clothing and Apparel",
            p_img: NoImage,
          },
      ],
    },
    {
      id: "2427",
      name: "Gul Ahmed",
      category: "Clothing and Apparel",
      description:"Gul Ahmed is a leading textile and apparel brand, known for its high-quality fabrics and a wide range of clothing options for all seasons.",
      brand_logo: GulAhmed,
      website_url: "www.gulahmedshop.com",
      founder: "Haji Ali Mohammad",
      products: [
        {
          p_name: "Lawn and Cotton Suits",
          p_category: "Clothing and Apparel",
          p_img: NoImage,
        },
        {
            p_name: "Formal and Casual Wear",
            p_category: "Clothing and Apparel",
            p_img: NoImage,
          },
          {
            p_name: "Men's and Women's Clothing",
            p_category: "Clothing and Apparel",
            p_img: NoImage,
          },
      ],
    },
    {
      id: "2428",
      name: "J. (Junaid Jamshed)",
      category: "Clothing and Apparel",
      description:"Junaid Jamshed is a brand offering traditional and modest clothing, including eastern wear, perfumes, and accessories.",
      brand_logo: JunaidJamshed,
      website_url: "www.junaidjamshed.com",
      founder: "Junaid Jamshed",
      products: [
        {
          p_name: "Traditional Shalwar Kameez",
          p_category: "Clothing and Apparel",
          p_img: JunaidJamshedShalwarKameez,
        },
        {
            p_name: "Fragrances and Perfumes",
            p_category: "Clothing and Apparel",
            p_img: JunaidJamshedFragrances,
          },
          {
            p_name: "Accessories (Scarves, Jewelry)",
            p_category: "Clothing and Apparel",
            p_img: JunaidJamshedJewelry,
          },
      ],
    },
    {
      id: "2431",
      name: "Qarshi Industries",
      category: "Medications and Health Products",
      description:"Qarshi Industries is a well-known brand offering a range of herbal and natural health products, including supplements, tonics, and herbal remedies.",
      brand_logo: QarshiINdustries,
      website_url: "www.qarshi.com",
      founder: "Hakeem Muhammad Saeed",
      products: [
        {
          p_name: "Joshanda",
          p_category: "Medications and Health Products",
          p_img: Joshanda,
        },
        {
            p_name: "Sharbat-e-Faulad",
            p_category: "Medications and Health Products",
            p_img: SharbateFaulad,
          },
          {
            p_name: "Jam-e-Shirin",
            p_category: "Medications and Health Products",
            p_img: JameShirin,
          },
      ],
    },
    {
      id: "2432",
      name: "Hamdard Pakistan",
      category: "Medications and Health Products",
      description:"Hamdard Pakistan is a renowned brand specializing in natural and herbal medicines, dietary supplements, and health and wellness products.",
      brand_logo: Hamdard,
      website_url: "www.hamdard.com.pk",
      founder: "Hakeem Muhammad Saeed",
      products: [
        {
          p_name: "Rooh Afza",
          p_category: "Medications and Health Products",
          p_img: RoohAfza,
        },
        {
            p_name: "Safi",
            p_category: "Medications and Health Products",
            p_img: HamdardSafi,
          },
          {
            p_name: "Sualin",
            p_category: "Medications and Health Products",
            p_img: HamdardSualin,
          },
      ],
    },
    {
      id: "2433",
      name: "Sami Pharmaceutical Company Ltd",
      category: "Medications and Health Products",
      description:"Sami Pharmaceutical Company Ltd focuses on pharmaceuticals, offering a variety of medicines and healthcare products for various medical conditions.",
      brand_logo: SamiPharma,
      website_url: "www.samipharmapk.com",
      founder: "Shamim Ahmed(Chairman)",
      products: [
        {
          p_name: "Ciprobac",
          p_category: "Medications and Health Products",
          p_img: NoImage,
        },
        {
            p_name: "Zymaxid",
            p_category: "Medications and Health Products",
            p_img: NoImage,
          },
          {
            p_name: "Fibrozil",
            p_category: "Medications and Health Products",
            p_img: NoImage,
          },
      ],
    },
    {
      id: "2434",
      name: "Martin Dow",
      category: "Medications and Health Products",
      description:"Martin Dow is a pharmaceutical company producing a wide range of medications, including prescription drugs, over-the-counter medicines, and healthcare products.",
      brand_logo: MartinDow,
      website_url: "www.martindow.com",
      founder: "Jawed Akhai",
      products: [
        {
          p_name: "Brufen",
          p_category: "Medications and Health Products",
          p_img: NoImage,
        },
        {
            p_name: "Cardiprin",
            p_category: "Medications and Health Products",
            p_img: NoImage,
          },
      ],
    },
    {
      id: "2435",
      name: "Hilton Pharma Limited",
      category: "Medications and Health Products",
      description:"Hilton Pharma Limited is a leading pharmaceutical company offering a diverse range of medicines, healthcare products, and medical solutions.",
      brand_logo: HiltonPharma,
      website_url: "www.hiltonpharma.com",
      founder: "Yusuf H. Shirazi",
      products: [
        {
          p_name: "Ostocalcium",
          p_category: "Medications and Health Products",
          p_img: NoImage,
        },
        {
            p_name: "Koflet",
            p_category: "Medications and Health Products",
            p_img: NoImage,
          },
      ],
    },
    {
      id: "2436",
      name: "Getz Pharmaceutical Company Ltd",
      category: "Medications and Health Products",
      description:"Getz Pharmaceutical Company Ltd specializes in pharmaceuticals and healthcare products, providing a wide range of medications for various therapeutic areas.",
      brand_logo: GetzPharmaceutical,
      website_url: "www.getzpharma.com",
      founder: "Khalid Mahmood (CEO)",
      products: [
        {
          p_name: "Ciplox",
          p_category: "Medications and Health Products",
          p_img: GetzPharmaceuticalCiplox,
        },
      ],
    },
    {
      id: "2437",
      name: "Ferozsons Laboratories Limited",
      category: "Medications and Health Products",
      description:"Ferozsons Laboratories Limited is a pharmaceutical company offering a wide range of medicines, healthcare products, and medical devices.",
      brand_logo: FerozsonsLaboratories,
      website_url: "www.ferozsons-labs.com",
      founder: "Osman Khalid Waheed (CEO)",
      products: [
        {
          p_name: "Calnic",
          p_category: "Medications and Health Products",
          p_img: NoImage,
        },
        {
            p_name: "Nebicard",
            p_category: "Medications and Health Products",
            p_img: NoImage,
          },
      ],
    },
    {
      id: "2438",
      name: "Pak Elektron Limited (PEL)",
      category: "Electronics & Home appliances",
      description:"PEL is a leading electronics and home appliances brand, manufacturing a variety of products such as refrigerators, air conditioners, and washing machines.",
      brand_logo: PEL,
      website_url: "www.pel.com.pk",
      founder: "Muhammad Naseem Saigol (Chairman)",
      products: [
        {
          p_name: "Refrigerators",
          p_category: "Electronics & Home appliances",
          p_img: PELRefrigerators,
        },
        {
            p_name: "Air Conditioners",
            p_category: "Electronics & Home appliances",
            p_img: PELAirConditioners,
          },
          {
            p_name: "Microwaves",
            p_category: "Electronics & Home appliances",
            p_img: PELMicrowaves,
          },
          {
            p_name: "LED TVs",
            p_category: "Electronics & Home appliances",
            p_img: PELLED,
          },
      ],
    },
    {
      id: "2439",
      name: "Dawlance",
      category: "Electronics & Home appliances",
      description:"Dawlance is a well-known brand specializing in home appliances, including refrigerators, air conditioners, and kitchen appliances.",
      brand_logo: Dawlance,
      website_url: "www.dawlance.com.pk",
      founder: "Bashir Dawood",
      products: [
        {
          p_name: "Refrigerators",
          p_category: "Electronics & Home appliances",
          p_img: DawlanceRefrigerators,
        },
        {
            p_name: "Air Conditioners",
            p_category: "Electronics & Home appliances",
            p_img: DawlanceAirConditioners,
          },
          {
            p_name: "Kitchen Appliances",
            p_category: "Electronics & Home appliances",
            p_img: DawlanceKitchenAppliances,
          },
      ],
    },
    {
      id: "2440",
      name: "Gaba National Electronics",
      category: "Electronics & Home appliances",
      description:"Gaba National Electronics is a brand offering a diverse range of home appliances, including fans, blenders, and kitchen appliances.",
      brand_logo: GabaNational,
      website_url: "estore.gabanational.net.pk",
      founder: "",
      products: [
        {
          p_name: "Fans",
          p_category: "Electronics & Home appliances",
          p_img: GabaNationalFans,
        },
        {
            p_name: "Heaters",
            p_category: "Electronics & Home appliances",
            p_img: GabaNationalHeaters,
          },
          {
            p_name: "Blenders",
            p_category: "Electronics & Home appliances",
            p_img: GabaNationalBlender,
          },
          {
            p_name: "Kitchen Appliances",
            p_category: "Electronics & Home appliances",
            p_img: GabaNationalKitchenAppliances,
          },
      ],
    },
    {
      id: "2441",
      name: "Super Asia",
      category: "Electronics & Home appliances",
      description:"Super Asia is a well-established brand manufacturing a variety of home appliances, including washing machines, air coolers, and room heaters.",
      brand_logo: SuperAsia,
      website_url: "www.superasiastore.com",
      founder: "Mian Muhammad Din",
      products: [
        {
          p_name: "Washing Machines",
          p_category: "Electronics & Home appliances",
          p_img: SuperAsiaWashingMachines,
        },
        {
            p_name: "Air Coolers",
            p_category: "Electronics & Home appliances",
            p_img: SuperAsiaAirCooler,
          },
          {
            p_name: "Room Heaters",
            p_category: "Electronics & Home appliances",
            p_img: SuperAsiaHeaters,
          },
      ],
    },
    {
      id: "2442",
      name: "G.F.C Fans",
      category: "Electronics & Home appliances",
      description:"G.F.C Fans is a leading brand in the fan industry, offering a range of ceiling fans, pedestal fans, and exhaust fans.",
      brand_logo: GFC,
      website_url: "www.gfcfans.com",
      founder: "G.F.C Group",
      products: [
        {
          p_name: "Ceiling Fans",
          p_category: "Electronics & Home appliances",
          p_img: GFCCeilingFans,
        },
        {
            p_name: "Exhaust Fans",
            p_category: "Electronics & Home appliances",
            p_img: GFCExhaustFans,
          },
          {
            p_name: "Pedestal Fans",
            p_category: "Electronics & Home appliances",
            p_img: GFCPedestalFans,
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
