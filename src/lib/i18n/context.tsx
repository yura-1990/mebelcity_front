
import React, { createContext, useState, useContext, useEffect } from 'react';

export type Language = 'ru' | 'uz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.catalog': 'Каталог',
    'nav.about': 'О нас',
    'nav.gallery': 'Галерея',
    'nav.contact': 'Контакты',
    'nav.callRequest': 'Заказать звонок',
    
    // Hero Section
    'hero.title': 'Превосходная мебель для Вашего комфорта',
    'hero.description': 'MebelCity - ведущий производитель стильной и качественной мебели в Узбекистане. Создайте дом своей мечты с нашими элегантными коллекциями.',
    'hero.viewCatalog': 'Смотреть каталог',
    'hero.contactUs': 'Связаться с нами',
    
    // Category Section
    'category.title': 'Наши Категории',
    'category.description': 'Исследуйте наши разнообразные коллекции мебели, созданные для каждой комнаты в вашем доме',
    'category.livingRoom': 'Офисные шкафи',
    'category.bedroom': 'Набор офисной мебели',
    'category.kitchen': 'Кухня',
    'category.magazine': 'Журнальные столики',
    'category.office': 'Офисные столы',
    'category.viewCollection': 'Смотреть коллекцию',
    
    // Services Section
    'services.title': 'Наши Услуги',
    'services.description': 'Предлагаем комплексные решения для офисной мебели высочайшего качества',
    'services.specialOffers': 'Специальные предложения',
    'services.specialOffersDesc': 'Эксклюзивные скидки для корпоративных клиентов при заказе комплексного оснащения офиса.',
    'services.customDesign': 'Индивидуальный дизайн',
    'services.customDesignDesc': 'Разработка уникальных решений под ваши потребности и корпоративный стиль.',
    'services.qualityGuarantee': 'Гарантия качества',
    'services.qualityGuaranteeDesc': '5 лет гарантии на всю офисную мебель и бесплатное сервисное обслуживание.',
    'services.learnMore': 'Подробнее',
    
    // About Section
    'about.title': 'О компании MebelCity',
    'about.description1': 'MebelCity — ведущий производитель мебели в Узбекистане с более чем 15-летним опытом. Мы специализируемся на создании элегантной, функциональной и долговечной мебели для вашего дома и офиса.',
    'about.description2': 'Наша миссия — сделать жизнь наших клиентов более комфортной и стильной, предлагая мебель высочайшего качества по доступным ценам. Каждый предмет мебели создается с любовью к деталям и уважением к традициям мебельного ремесла.',
    'about.highQuality': 'Высокое качество',
    'about.highQualityDesc': 'Мы используем только лучшие материалы и современное оборудование для производства нашей мебели',
    'about.customDesign': 'Индивидуальный дизайн',
    'about.customDesignDesc': 'Наши дизайнеры помогут создать мебель, идеально соответствующую вашим пожеланиям и интерьеру',
    'about.timelyDelivery': 'Своевременная доставка',
    'about.timelyDeliveryDesc': 'Мы гарантируем доставку вашего заказа в согласованные сроки, без задержек',
    'about.warranty': 'Гарантия 1 год',
    'about.warrantyDesc': 'Мы уверены в качестве нашей продукции и предоставляем расширенную гарантию на все изделия',
    
    // Footer
    'footer.subscribe': 'Подпишитесь на наши новости',
    'footer.subscribeDesc': 'Получайте информацию о специальных предложениях, новых коллекциях и дизайнерских идеях',
    'footer.enterEmail': 'Введите email',
    'footer.subscribeButton': 'Подписаться',
    'footer.aboutCompany': 'Ведущий производитель стильной и качественной мебели в Узбекистане с более чем 15-летним опытом работы.',
    'footer.catalog': 'Каталог',
    'footer.livingRoom': 'Мебель для гостиной',
    'footer.bedroom': 'Спальные гарнитуры',
    'footer.kitchen': 'Кухонная мебель',
    'footer.officeFurniture': 'Офисная мебель',
    'footer.childrenFurniture': 'Детская мебель',
    'footer.information': 'Информация',
    'footer.aboutUs': 'О компании',
    'footer.deliveryPayment': 'Доставка и оплата',
    'footer.warranty': 'Гарантия и возврат',
    'footer.news': 'Статьи и новости',
    'footer.careers': 'Карьера',
    'footer.contacts': 'Контакты',
    'footer.workingHours': 'Режим работы',
    'footer.copyright': '© 2010 MebelCity. Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Правила использования',
    "learn_more": "Узнайте больше о MebelCity — ведущем производителе мебели в Узбекистане с более чем 15-летним опытом.",
    "about_intro": "Компания MebelCity была основана в 2008 году небольшой командой преданных своему делу мастеров, увлечённых созданием красивой мебели. То, что начиналось как маленькая мастерская, выросло в одного из ведущих производителей мебели в Узбекистане.",
    "about_values": "С годами мы оставались верны нашим основополагающим принципам: высокому качеству, продуманному дизайну и удовлетворённости клиентов. Мы расширили наши производственные мощности, инвестировали в новейшие технологии и собрали команду самых талантливых дизайнеров и мастеров.",
    "about_today": "Сегодня продукция MebelCity представлена в тысячах домов и офисов по всему Узбекистану и в соседних странах. Мы гордимся своим наследием и с воодушевлением смотрим в будущее, продолжая развиваться и внедрять инновации.",
    "our_story": "Наша история",
    "years_experience": "Лет опыта",
    "happy_customers": "Довольных клиентов",
    "professional_employees": "Профессиональных сотрудников",
    "values_mission": "Наши ценности и миссия",
    "furniture_gallery_intro": "Просмотрите нашу мебельную галерею, чтобы увидеть красивые коллекции и вдохновиться для оформления своего дома или офиса.",
    "furniture_gallery_explore": "Ознакомьтесь с нашей тщательно отобранной коллекцией впечатляющих мебельных дизайнов и получите вдохновение для вашего следующего интерьера.",
    "no_images": "Изображения для этой категории не найдены.",
    "furniture_catalog_title": "Каталог офисной мебели",
    "furniture_catalog_description": "Каталог офисной мебели MebelCity — столы, шкафы, комплекты и современные решения для вашего офиса в Ташкенте.",
    "office_home_furniture": "Широкий ассортимент офисной мебели: столы, шкафы, кресла и комплекты для офиса с доставкой по Узбекистану.",
    "meta_description": "Офисная мебель в Ташкенте от производителя MebelCity. Купить офисные столы, шкафы, комплекты с доставкой по Узбекистану. 15+ лет опыта, гарантия качества.",
    "meta_keywords": "офисная мебель Ташкент, офисная мебель в Ташкенте, купить офисную мебель, мебель для офиса Ташкент, офисные столы Ташкент, офисные шкафы, мебель на заказ Ташкент, мебель Узбекистан, офисная мебель недорого, комплект офисной мебели, MebelCity",
    "og_title": "Офисная мебель в Ташкенте — MebelCity | Столы, шкафы, комплекты",
    "og_description": "Офисная мебель от производителя в Ташкенте. 15+ лет опыта, доставка по Узбекистану. Столы, шкафы, кресла и комплекты по доступным ценам.",
    "hero_title": "Превосходная мебель <br /> для Вашего комфорта",
    "hero_description": "MebelCity - ведущий производитель качественной мебели в Узбекистане. Создайте офис своей мечты с нашими коллекциями.",
    "view_catalog": "Смотреть каталог",
    "contact_us": "Связаться с нами",
    "services_title": "Наши Услуги",
    "services_subtitle": "Предлагаем комплексные решения для офисной мебели высочайшего качества",

    "seo_description": "Офисная мебель в Ташкенте от производителя MebelCity ✓ Офисные столы, шкафы, комплекты мебели ✓ Доставка по Узбекистану ✓ 15+ лет опыта ✓ Гарантия качества",
    "seo_title": "Офисная мебель в Ташкенте — купить в MebelCity | Доставка по Узбекистану",

    "service_offers_title": "Специальные предложения",
    "service_offers_description": "Эксклюзивные скидки для корпоративных клиентов при заказе комплексного оснащения офиса.",

    "service_design_title": "Индивидуальный дизайн",
    "service_design_description": "Разработка уникальных решений под ваши потребности и корпоративный стиль.",

    "service_warranty_title": "Гарантия качества",
    "service_warranty_description": "1 лет гарантии на всю офисную мебель и бесплатное сервисное обслуживание.",

    "learn_more_about": "Подробнее",
    "about_title": "О компании MebelCity",
    "about_intro_about": "MebelCity — ведущий производитель мебели в Узбекистане с более чем 15-летним опытом. Мы специализируемся на создании элегантной, функциональной и долговечной мебели для вашего дома и офиса.",
    "about_mission": "Наша миссия — сделать жизнь наших клиентов более комфортной и стильной, предлагая мебель высочайшего качества по доступным ценам. Каждый предмет мебели создается с любовью к деталям и уважением к традициям мебельного ремесла.",
    "feature_quality_title": "Высокое качество",
    "feature_quality_desc": "Мы используем только лучшие материалы и современное оборудование для производства нашей мебели",

    "feature_design_title": "Индивидуальный дизайн",
    "feature_design_desc": "Наши дизайнеры помогут создать мебель, идеально соответствующую вашим пожеланиям и интерьеру",

    "feature_delivery_title": "Своевременная доставка",
    "feature_delivery_desc": "Мы гарантируем доставку вашего заказа в согласованные сроки, без задержек",

    "feature_warranty_title": "Гарантия 1 года",
    "feature_warranty_desc": "Мы уверены в качестве нашей продукции и предоставляем расширенную гарантию на все изделия",

    "address": "Наш адрес",

    "contact.heading": "Свяжитесь с нашей командой экспертов по мебели. Мы поможем создать идеальное пространство.",
    "contact.title": "Контактная информация",
    "contact.phone": "Телефон",
    "contact.email": "Электронная почта",
    "contact.address": "Адрес",
    "contact.working_hours": "Время работы",
    "contact.schedule": "Понедельник – Суббота: 10:00 – 17:00",
    "contact.why_choose_us": "Почему выбирают нас?",
    "contact.reasons.quality": "Премиальные материалы",
    "contact.reasons.craftsmanship": "Профессиональное мастерство",
    "contact.reasons.custom": "Индивидуальные мебельные решения",
    "contact.reasons.pricing": "Конкурентные цены",
    "contact.reasons.warranty": "Гарантия 1 год на всю продукцию",
    "nav.cart": "Корзина",
    "status.in_stock": "В наличии",
    "status.on_order": "На заказ",
    "toast.added_to_favorites": "Добавлено в избранное",
    "toast.added_to_favorites_desc": "\"{name}\" добавлен в избранное",
    "toast.link_copied": "Ссылка скопирована",
    "toast.link_copied_desc": "Теперь вы можете поделиться товаром с друзьями",
    "product.not_found": "Товар не найден",
    "product.not_found_desc": "Извините, запрашиваемый товар не существует или был удален.",
    "product.back_to_catalog": "Вернуться в каталог",
    "product.learn_more": "Узнать больше",
    "product.quantity": "Количество",
    "cart.title": "Корзина",
    "cart.empty": "Ваша корзина пуста",
    "cart.total": "Итого",
    "cart.view_cart": "Просмотр корзины",
    "cart.checkout": "Оформить заказ",
    "aria.open_cart": "Открыть корзину",
    "aria.remove_item": "Удалить товар",
    "aria.increase": "Увеличить количество",
    "aria.decrease": "Уменьшить количество",
    "cart.items_count": "Товары в корзине ({count})",
    "cart.clear": "Очистить корзину",
    "cart.summary": "Сумма заказа",
    "cart.delivery": "Доставка",
    "cart.free": "Бесплатно",
    "cart.continue_shopping": "Продолжить покупки",
    "cart.proceed_to_checkout": "Перейти к оформлению",
    "checkout.title": "Оформление заказа",
    "checkout.contact_info": "Контактная информация",
    "checkout.first_name": "Имя",
    "checkout.last_name": "Фамилия",
    "checkout.address": "Адрес доставки",
    "checkout.comment": "Комментарий к заказу",
    "checkout.confirm": "Подтвердить заказ",
    "checkout.your_order": "Ваш заказ",
    "checkout.success": "Заказ оформлен!",
    "checkout.success_desc": "Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время.",
    "category.all": "Все",
    "contact.address_full": "Ташкентская область, Зангиатинский район, Назарбек, улица Хорезмий, дом 82",
    "contact.working_hours_full": "Пн-Сб: 10:00 - 17:00",
    "toast.service_view": "Просмотр услуги",
    "toast.service_selected": "Вы выбрали услугу",
    "warranty.title": "Гарантия качества",
    "warranty.subtitle": "1 год гарантии на всю офисную мебель и сервисное обслуживание. Мы уверены в качестве нашей продукции и предоставляем расширенную гарантию на все изделия.",
    "warranty.what_included": "Что входит в гарантийное обслуживание",
    "warranty.not_included": "На что не распространяется гарантия",
    "warranty.included_item1": "Бесплатный ремонт или замена изделия в случае обнаружения производственного дефекта",
    "warranty.included_item2": "Бесплатный выезд специалиста для диагностики проблемы",
    "warranty.included_item3": "Ремонт или замена некачественных деталей и механизмов",
    "warranty.included_item4": "Консультации по правильной эксплуатации и уходу за мебелью",
    "warranty.not_included_item1": "Механические повреждения, возникшие в процессе эксплуатации мебели",
    "warranty.not_included_item2": "Дефекты, вызванные неправильной сборкой, если сборка производилась не нашими специалистами",
    "warranty.not_included_item3": "Повреждения, связанные с нарушением условий эксплуатации (повышенная влажность, воздействие высоких температур и т.д.)",
    "warranty.not_included_item4": "Естественный износ материалов (потертости, выцветание и т.д.)",
    "offers.title": "Специальные предложения",
    "offers.subtitle": "Эксклюзивные скидки для корпоративных клиентов при заказе комплексного оснащения офиса или больших объемов мебели для любых помещений.",
    "offers.advantages_title": "Преимущества корпоративных предложений",
    "offers.advantage1_title": "Индивидуальные скидки",
    "offers.advantage1_desc": "Размер скидки зависит от объёма заказа и может достигать 15% от розничной цены.",
    "offers.advantage2_title": "Бесплатная доставка",
    "offers.advantage2_desc": "При заказе на определённую сумму доставка и сборка мебели осуществляется бесплатно по городу Ташкенту.",
    "offers.advantage3_title": "Гарантийное обслуживание",
    "offers.advantage3_desc": "Расширенная гарантия для корпоративных клиентов — до 1 лет на всю мебель.",
    "offers.advantage4_title": "Индивидуальные условия оплаты",
    "offers.advantage4_desc": "Возможна рассрочка, отсрочка платежа или поэтапная оплата.",
    "design.title": "Индивидуальный дизайн",
    "design.subtitle": "Разработка уникальных решений под ваши потребности и корпоративный стиль. Наши дизайнеры создадут мебель, которая идеально впишется в ваше пространство и подчеркнет индивидуальность интерьера.",
    "design.stages_title": "Этапы создания индивидуальной мебели",
    "design.stage1_title": "Консультация и планирование",
    "design.stage1_desc": "Первая встреча с нашим дизайнером, обсуждение ваших потребностей, предпочтений и бюджета. Анализ пространства и функциональных требований.",
    "design.stage2_title": "Разработка концепции",
    "design.stage2_desc": "Создание эскизов и 3D-моделей будущей мебели. Подбор материалов, цветовой гаммы и фурнитуры. Представление нескольких вариантов дизайна на выбор.",
    "design.stage3_title": "Утверждение проекта",
    "design.stage3_desc": "Обсуждение предложенных вариантов, внесение корректировок и окончательное утверждение дизайна, материалов и сроков изготовления.",
    "design.stage4_title": "Производство и установка",
    "design.stage4_desc": "Изготовление мебели на нашем современном производстве. Контроль качества на всех этапах. Доставка и профессиональная установка готовой мебели.",
    "design.capabilities_title": "Наши возможности",
    "design.capability1": "Мебель любой сложности и конфигурации",
    "design.capability2": "Широкий выбор материалов и фурнитуры",
    "design.capability3": "Интеграция вашего корпоративного стиля",
    "design.capability4": "Эргономичные решения для максимального комфорта",
    "design.capability5": "Функциональная мебель для оптимизации пространства"
  },

  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.catalog': 'Katalog',
    'nav.about': 'Biz haqimizda',
    'nav.gallery': 'Galereya',
    'nav.contact': 'Aloqa',
    'nav.callRequest': 'Qo\'ng\'iroq buyurtma qilish',
    
    // Hero Section
    'hero.title': 'Qulayligingiz uchun yuqori sifatli mebel',
    'hero.description': 'MebelCity - O\'zbekistonda zamonaviy va sifatli mebel ishlab chiqaruvchi yetakchi kompaniya. Bizning nafis kolleksiyalarimiz bilan orzuyingizdagi uyni yarating.',
    'hero.viewCatalog': 'Katalogni ko\'rish',
    'hero.contactUs': 'Biz bilan bog\'laning',
    
    // Category Section
    'category.title': 'Kategoriyalarimiz',
    'category.description': 'Uyingizning har bir xonasi uchun mo\'ljallangan turli mebel kolleksiyalarimizni o\'rganing',
    'category.livingRoom': 'Ofis javonlar',
    'category.bedroom': 'Ofis mebellar toplami',
    'category.kitchen': 'Oshxona',
    'category.magazine': 'Ofis jurnal stollar',
    'category.office': 'Ofis stollar',
    'category.viewCollection': 'Kolleksiyani ko\'rish',
    
    // Services Section
    'services.title': 'Bizning xizmatlarimiz',
    'services.description': 'Biz eng yuqori sifatli ofis mebellari uchun kompleks yechimlarni taklif etamiz',
    'services.specialOffers': 'Maxsus takliflar',
    'services.specialOffersDesc': 'Ofisni kompleks jihozlash buyurtma qilinganda korporativ mijozlar uchun eksklyuziv chegirmalar.',
    'services.customDesign': 'Individual dizayn',
    'services.customDesignDesc': 'Ehtiyojlaringiz va korporativ uslubingizga mos noyob yechimlarni ishlab chiqish.',
    'services.qualityGuarantee': 'Sifat kafolati',
    'services.qualityGuaranteeDesc': 'Barcha ofis mebellariga 5 yillik kafolat va bepul servis xizmati.',
    'services.learnMore': 'Batafsil',
    
    // About Section
    'about.title': 'MebelCity haqida',
    'about.description1': 'MebelCity 15 yildan ortiq tajribaga ega bo\'lgan O\'zbekistonning yetakchi mebel ishlab chiqaruvchisidir. Biz uyingiz va ofisingiz uchun nafis, funksional va chidamli mebellar ishlab chiqarishga ixtisoslashganmiz.',
    'about.description2': 'Bizning vazifamiz - mijozlarimizning hayotini arzon narxlarda eng yuqori sifatli mebellarni taklif qilish orqali yanada qulay va zamonaviy qilishdir. Har bir mebel detallarga muhabbat va mebel hunarmandchilik an\'analariga hurmat bilan yaratilgan.',
    'about.highQuality': 'Yuqori sifat',
    'about.highQualityDesc': 'Biz mebellarimizni ishlab chiqarish uchun faqat eng yaxshi materiallar va zamonaviy uskunalardan foydalanamiz',
    'about.customDesign': 'Individual dizayn',
    'about.customDesignDesc': 'Dizaynerlarimiz sizning istaklaringiz va interieringizga to\'liq mos keladigan mebellarni yaratishga yordam beradi',
    'about.timelyDelivery': 'O\'z vaqtida yetkazib berish',
    'about.timelyDeliveryDesc': 'Biz buyurtmangizni kelishilgan muddatlarda, kechikishlarsiz yetkazib berishni kafolatlaymiz',
    'about.warranty': '1 yillik kafolat',
    'about.warrantyDesc': 'Biz mahsulotlarimiz sifatiga ishonamiz va barcha mahsulotlarga kengaytirilgan kafolat beramiz',
    
    // Footer
    'footer.subscribe': 'Yangiliklarga obuna bo\'ling',
    'footer.subscribeDesc': 'Maxsus takliflar, yangi kolleksiyalar va dizayn g\'oyalari haqida ma\'lumot oling',
    'footer.enterEmail': 'Email kiriting',
    'footer.subscribeButton': 'Obuna bo\'lish',
    'footer.aboutCompany': '15 yildan ortiq tajribaga ega bo\'lgan O\'zbekistonda zamonaviy va sifatli mebel ishlab chiqaruvchi yetakchi kompaniya.',
    'footer.catalog': 'Katalog',
    'footer.livingRoom': 'Mehmonxona mebellari',
    'footer.bedroom': 'Yotoqxona to\'plamlari',
    'footer.kitchen': 'Oshxona mebellari',
    'footer.officeFurniture': 'Ofis mebellari',
    'footer.childrenFurniture': 'Bolalar mebellari',
    'footer.information': 'Ma\'lumot',
    'footer.aboutUs': 'Kompaniya haqida',
    'footer.deliveryPayment': 'Yetkazib berish va to\'lov',
    'footer.warranty': 'Kafolat va qaytarish',
    'footer.news': 'Maqolalar va yangiliklar',
    'footer.careers': 'Karyera',
    'footer.contacts': 'Kontaktlar',
    'footer.workingHours': 'Ish vaqti',
    'footer.copyright': '© 2010 MebelCity. Barcha huquqlar himoyalangan.',
    'footer.privacy': 'Maxfiylik siyosati',
    'footer.terms': 'Foydalanish shartlari',
    "learn_more": "MebelCity haqida ko‘proq ma’lumot oling — O‘zbekistondagi 15 yildan ortiq tajribaga ega yetakchi mebel ishlab chiqaruvchisi.",
    "about_intro": "MebelCity 2008-yilda chiroyli mebellar yaratishga ishtiyoqmand bo‘lgan mohir hunarmandlar jamoasi tomonidan tashkil etilgan. Kichik ustaxonadan boshlangan bu yo‘l, bugun O‘zbekistonning yetakchi mebel ishlab chiqaruvchilaridan biriga aylandi.",
    "about_values": "Yillar davomida biz asosiy tamoyillarimizga sodiq qolganmiz: yuqori sifat, puxta dizayn va mijozlarning mamnunligi. Biz ishlab chiqarish bazamizni kengaytirdik, eng yangi texnologiyalarga sarmoya kiritdik va eng iqtidorli dizaynerlar hamda ustalardan iborat jamoani yig‘dik.",
    "about_today": "Bugungi kunda MebelCity mahsulotlarini O‘zbekiston va qo‘shni mamlakatlardagi minglab uylar va ofislarda uchratish mumkin. Biz o‘z merosimizdan faxrlanamiz va kelajakka ishonch bilan qarab, yangilik yaratishda davom etmoqdamiz.",
    "our_story": "Bizning hikoyamiz",
    "years_experience": "Yillik tajriba",
    "happy_customers": "Mamnun mijozlar",
    "professional_employees": "Professional xodimlar",
    "values_mission": "Bizning qadriyatlarimiz va vazifamiz",
    "furniture_gallery_intro": "Go‘zal mebel kolleksiyalarimizni ko‘rib chiqing va uydagi yoki ofisdagi dizayn uchun ilhom oling.",
    "furniture_gallery_explore": "Ajoyib mebel dizaynlari jamlangan kolleksiyamizni kashf eting va keyingi interyer loyihangiz uchun ilhom oling.",
    "no_images": "Ushbu kategoriya uchun rasmlar topilmadi.",
    "furniture_catalog_title": "Katalog",
    "furniture_catalog_description": "Ofisingizdagi har bir xona uchun yaratilgan turli xil mebel to‘plamlarimizni ko‘rib chiqing.",
    "office_home_furniture": "Ofis va uy uchun keng mebel tanlovi. Shkaflar, stollar va boshqa ko‘plab mahsulotlar.",
    "meta_description": "Toshkentda ofis mebellari. Yetkazib berish bilan ofis mebellarini xarid qiling. Sifatli va qulay narxlarda katta tanlov.",
    "meta_keywords": "mebel, mebel sotib olish, Toshkentda mebel, O‘zbekistonda mebel, shkaflar, stollar, oshxona, ofis mebellari",
    "og_title": "O‘zbekistondagi eng yaxshi ofis mebellari tanlovi!",
    "og_description": "Ofis va Uy uchun keng mebel tanlovi qulay narxlarda. Yuqori sifat, individual dizayn va butun O‘zbekiston bo‘ylab yetkazib berish.",
    "hero_title": "Sizning qulayligingiz uchun <br /> ajoyib mebellar",
    "hero_description": "MebelCity — O‘zbekistondagi yetakchi sifatli mebel ishlab chiqaruvchisi. Bizning to‘plamlar bilan orzuingizdagi ofisni yarating.",
    "view_catalog": "Katalogni ko‘rish",
    "contact_us": "Biz bilan bog‘lanish",
    "services_title": "Bizning xizmatlarimiz",
    "services_subtitle": "Ofis mebellari uchun eng yuqori sifatdagi kompleks yechimlarni taklif etamiz",

    "seo_description": "Toshkentda ofis mebellari — MebelCity ✓ Ofis stollari, javonlar, to'plamlar ✓ O'zbekiston bo'ylab yetkazib berish ✓ 15+ yillik tajriba ✓ Sifat kafolati",
    "seo_title": "Toshkentda ofis mebellari — MebelCity | O'zbekiston bo'ylab yetkazib berish",

    "service_offers_title": "Maxsus takliflar",
    "service_offers_description": "Ofis uchun kompleks buyurtma bergan korporativ mijozlarga eksklyuziv chegirmalar.",

    "service_design_title": "Individual dizayn",
    "service_design_description": "Sizning ehtiyojlaringiz va korporativ uslubingizga mos noyob yechimlarni ishlab chiqish.",

    "service_warranty_title": "Sifat kafolati",
    "service_warranty_description": "Barcha ofis mebellariga 1 yil kafolat va bepul servis xizmatlari.",

    "learn_more_about": "Batafsil",
    "about_title": "MebelCity kompaniyasi haqida",
    "about_intro_about": "MebelCity — O‘zbekistondagi 15 yildan ortiq tajribaga ega yetakchi mebel ishlab chiqaruvchisi. Biz sizning uyingiz va ofisingiz uchun nafis, funksional va bardoshli mebellarni yaratishga ixtisoslashganmiz.",
    "about_mission": "Bizning missiyamiz — mijozlarimiz hayotini yanada qulay va zamonaviy qilishdir. Buning uchun biz yuqori sifatli mebellarni qulay narxlarda taklif etamiz. Har bir mebel detallarni sevish va an’anaviy hunarmandchilikka hurmat bilan yaratiladi.",
    "feature_quality_title": "Yuqori sifat",
    "feature_quality_desc": "Mebel ishlab chiqarishda biz faqat eng yaxshi materiallar va zamonaviy uskunalardan foydalanamiz",

    "feature_design_title": "Individual dizayn",
    "feature_design_desc": "Bizning dizaynerlar mebelni sizning istaklaringiz va interyeringizga mos tarzda yaratishda yordam beradi",

    "feature_delivery_title": "O‘z vaqtida yetkazib berish",
    "feature_delivery_desc": "Buyurtmangizni kechiktirmasdan, kelishilgan muddatda yetkazib berilishini kafolatlaymiz",

    "feature_warranty_title": "1 yillik kafolat",
    "feature_warranty_desc": "Mahsulotlarimiz sifatiga ishonamiz va barcha buyumlar uchun kengaytirilgan kafolat taqdim etamiz",

    "address": "Manzilimiz",
    "contact.heading": "Mebel bo‘yicha mutaxassislarimiz bilan bog‘laning. Biz sizga mukammal makon yaratishda yordam beramiz.",
    "contact.title": "Aloqa ma'lumotlari",
    "contact.phone": "Telefon",
    "contact.email": "Elektron pochta",
    "contact.address": "Manzil",
    "contact.working_hours": "Ish vaqti",
    "contact.schedule": "Dushanba - Shanba: 10:00 - 17:00",
    "contact.why_choose_us": "Nega aynan biz?",
    "contact.reasons.quality": "Yuqori sifatli materiallar",
    "contact.reasons.craftsmanship": "Ustalik bilan ishlangan mahsulotlar",
    "contact.reasons.custom": "Buyurtma asosidagi mebel yechimlari",
    "contact.reasons.pricing": "Raqobatbardosh narxlar",
    "contact.reasons.warranty": "Barcha mahsulotlarga 1 yil kafolat",
    "nav.cart": "Savat",
    "status.in_stock": "Mavjud",
    "status.on_order": "Buyurtma asosida",
    "toast.added_to_favorites": "Saralanganlarga qo'shildi",
    "toast.added_to_favorites_desc": "\"{name}\" saralanganlarga qo'shildi",
    "toast.link_copied": "Havola nusxalandi",
    "toast.link_copied_desc": "Endi siz mahsulotni do'stlaringiz bilan baham ko'rishingiz mumkin",
    "product.not_found": "Mahsulot topilmadi",
    "product.not_found_desc": "Kechirasiz, so'ralgan mahsulot mavjud emas yoki o'chirilgan.",
    "product.back_to_catalog": "Katalogga qaytish",
    "product.learn_more": "Batafsil",
    "product.quantity": "Soni",
    "cart.title": "Savat",
    "cart.empty": "Savatingiz bo'sh",
    "cart.total": "Jami",
    "cart.view_cart": "Savatni ko'rish",
    "cart.checkout": "Buyurtmani rasmiylashtirish",
    "aria.open_cart": "Savatni ochish",
    "aria.remove_item": "Mahsulotni o'chirish",
    "aria.increase": "Sonini ko'paytirish",
    "aria.decrease": "Sonini kamaytirish",
    "cart.items_count": "Savatdagi mahsulotlar ({count})",
    "cart.clear": "Savatni tozalash",
    "cart.summary": "Buyurtma summasi",
    "cart.delivery": "Yetkazib berish",
    "cart.free": "Bepul",
    "cart.continue_shopping": "Xaridni davom ettirish",
    "cart.proceed_to_checkout": "Rasmiylashtirishga o'tish",
    "checkout.title": "Buyurtmani rasmiylashtirish",
    "checkout.contact_info": "Aloqa ma'lumotlari",
    "checkout.first_name": "Ism",
    "checkout.last_name": "Familiya",
    "checkout.address": "Yetkazib berish manzili",
    "checkout.comment": "Buyurtma uchun izoh",
    "checkout.confirm": "Buyurtmani tasdiqlash",
    "checkout.your_order": "Sizning buyurtmangiz",
    "checkout.success": "Buyurtma rasmiylashtirildi!",
    "checkout.success_desc": "Buyurtmangiz uchun rahmat. Tez orada siz bilan bog'lanamiz.",
    "category.all": "Barchasi",
    "contact.address_full": "Toshkent viloyati, Zangiota tumani, Nazarbek, Xorazmiy ko'chasi, 82-uy",
    "contact.working_hours_full": "Du-Shanba: 10:00 - 17:00",
    "toast.service_view": "Xizmatni ko'rish",
    "toast.service_selected": "Siz xizmatni tanladingiz",
    "warranty.title": "Sifat kafolati",
    "warranty.subtitle": "Barcha ofis mebellari uchun 1 yillik kafolat va servis xizmati. Biz mahsulotlarimiz sifatiga ishonamiz va barcha buyumlar uchun kengaytirilgan kafolat taqdim etamiz.",
    "warranty.what_included": "Kafolat xizmatiga nimalar kiradi",
    "warranty.not_included": "Kafolat nimalarga amal qilmaydi",
    "warranty.included_item1": "Ishlab chiqarish nuqsoni aniqlangan taqdirda mahsulotni bepul ta'mirlash yoki almashtirish",
    "warranty.included_item2": "Muammoni aniqlash uchun mutaxassisning bepul tashrifi",
    "warranty.included_item3": "Sifatsiz qismlar va mexanizmlarni ta'mirlash yoki almashtirish",
    "warranty.included_item4": "Mebeldan to'g'ri foydalanish va parvarish qilish bo'yicha maslahatlar",
    "warranty.not_included_item1": "Mebeldan foydalanish jarayonida yuzaga kelgan mexanik shikastlanishlar",
    "warranty.not_included_item2": "Agar yig'ish bizning mutaxassislarimiz tomonidan amalga oshirilmagan bo'lsa, noto'g'ri yig'ish natijasida yuzaga kelgan nuqsonlar",
    "warranty.not_included_item3": "Foydalanish shartlarining buzilishi bilan bog'liq shikastlanishlar (yuqori namlik, yuqori harorat ta'siri va h.k.)",
    "warranty.not_included_item4": "Materiallarning tabiiy eskirishi (siyqalanish, rang o'chishi va h.k.)",
    "offers.title": "Maxsus takliflar",
    "offers.subtitle": "Ofisni kompleks jihozlash yoki har qanday xonalar uchun katta hajmdagi mebel buyurtma qilinganda korporativ mijozlar uchun eksklyuziv chegirmalar.",
    "offers.advantages_title": "Korporativ takliflarning afzalliklari",
    "offers.advantage1_title": "Individual chegirmalar",
    "offers.advantage1_desc": "Chegirma miqdori buyurtma hajmiga bog'liq va chakana narxdan 15% gacha yetishi mumkin.",
    "offers.advantage2_title": "Bepul yetkazib berish",
    "offers.advantage2_desc": "Muayyan miqdordagi buyurtma uchun Toshkent shahri bo'ylab mebelni yetkazib berish va yig'ish bepul amalga oshiriladi.",
    "offers.advantage3_title": "Kafolat xizmati",
    "offers.advantage3_desc": "Korporativ mijozlar uchun kengaytirilgan kafolat — barcha mebellarga 1 yilgacha.",
    "offers.advantage4_title": "Individual to'lov shartlari",
    "offers.advantage4_desc": "Bo'lib to'lash, to'lovni kechiktirish yoki bosqichma-bosqich to'lash imkoniyati mavjud.",
    "design.title": "Individual dizayn",
    "design.subtitle": "Ehtiyojlaringiz va korporativ uslubingizga mos noyob yechimlarni ishlab chiqish. Dizaynerlarimiz sizning makoningizga to'liq mos keladigan va interyerning o'ziga xosligini ta'kidlaydigan mebellarni yaratadilar.",
    "design.stages_title": "Individual mebel yaratish bosqichlari",
    "design.stage1_title": "Konsultatsiya va rejalashtirish",
    "design.stage1_desc": "Dizaynerimiz bilan birinchi uchrashuv, ehtiyojlaringiz, afzalliklaringiz va byudjetingizni muhokama qilish. Makon va funksional talablarni tahlil qilish.",
    "design.stage2_title": "Konseptni ishlab chiqish",
    "design.stage2_desc": "Kelajakdagi mebelning eskizlari va 3D modellarini yaratish. Materiallar, ranglar gammasi va furniturani tanlash. Tanlash uchun bir nechta dizayn variantlarini taqdim etish.",
    "design.stage3_title": "Loyihani tasdiqlash",
    "design.stage3_desc": "Taklif etilgan variantlarni muhokama qilish, tuzatishlar kiritish va dizayn, materiallar hamda ishlab chiqarish muddatlarini yakuniy tasdiqlash.",
    "design.stage4_title": "Ishlab chiqarish va o'rnatish",
    "design.stage4_desc": "Zamonaviy ishlab chiqarishimizda mebel tayyorlash. Barcha bosqichlarda sifat nazorati. Tayyor mebelni yetkazib berish va professional o'rnatish.",
    "design.capabilities_title": "Bizning imkoniyatlarimiz",
    "design.capability1": "Har qanday murakkablik va konfiguratsiyadagi mebellar",
    "design.capability2": "Materiallar va furnituraning keng tanlovi",
    "design.capability3": "Sizning korporativ uslubingizni integratsiya qilish",
    "design.capability4": "Maksimal qulaylik uchun ergonomik yechimlar",
    "design.capability5": "Makonni optimallashtirish uchun funksional mebellar"
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get the language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'ru'; // Default to Russian if no language is saved
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    setLanguageState(lang);
  };

  // Synchronize document lang on mount
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
