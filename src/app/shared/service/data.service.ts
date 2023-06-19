import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  categories: any;

  constructor() {}
  public header: any = [
    {
      tittle: 'Home',
      base: '',
      showAsTab: false,
      route: '',
      separateRoute: true,
    },
    {
      tittle: ' Pricing',
      route: '/pages/pricing',
      showAsTab: false,
      separateRoute: true,
      base: 'pages',
      page: 'pricing',
    },
  ];

  public testimonialList = [
    {
      img: 'assets/img/testimonial-1.jpg',
      posting: 'Dev',
      position: 'Lead Intranet Technician',
      para: 'Omnis totam molestiae delectus nemo alias nesciunt harum et Nobis dolorum excepturi quod vel Sunt est qui ab non dolores repellat rem impedit dolores Ut ea rerum cum eum Alias dolores tempore illo accusantium est et voluptatem voluptas',
    },
    {
      img: 'assets/img/testimonial-2.jpg',
      posting: 'Esther Hills',
      position: 'Lead Intranet Technician',
      para: 'Omnis totam molestiae delectus nemo alias nesciunt harum et Nobis dolorum excepturi quod vel Sunt est qui ab non dolores repellat rem impedit dolores Ut ea rerum cum eum Alias dolores tempore illo accusantium est et voluptatem voluptas',
    },
  ];

  public pricingList = [
    {
      title: 'Link Management',
      pricedate: 'Free',
      pricemonth: '/ month',
      pricebody: 'Popular Link Management Features',
      pricebodyList: 'Basic listing submission',
      pricebodyList1: 'One Listing',
      pricebodyList2: '30 days Availabilty',
      pricebodyList3: 'Limited Support',
      pricebodyList4: 'Edit your listing',
    },
    {
      title: 'QR Codes',
      pricedate: 'Free',
      pricemonth: '/ month',
      pricebody: 'Popular QR Code Features ',
      pricebodyList: 'Fully customizable QR Codes',
      pricebodyList1: 'Dynamic QR Codes',
      pricebodyList2: '30 days Availabilty',
      pricebodyList3: 'QR Code types & destination options',
      pricebodyList4: 'Advanced analytics & tracking',
    },
    {
      title: 'Link-in-bio',
      pricedate: 'Free',
      pricemonth: '/ month',
      pricebody: 'Popular Link-in-bio Features',
      pricebodyList: 'Basic listiLink Managementng submission',
      pricebodyList1: 'Custom URLs for social media',
      pricebodyList2: 'Customizable landing page',
      pricebodyList3: 'Easy-to-manage links',
      pricebodyList4: 'Link and landing page tracking',
    },
  ];

  public universitiesCompanies = [
    {
      img: 'assets/img/partners/partners-1.svg',
    },
    {
      img: 'assets/img/partners/partners-2.svg',
    },
    {
      img: 'assets/img/partners/partners-3.svg',
    },
    {
      img: 'assets/img/partners/partners-4.svg',
    },
    {
      img: 'assets/img/partners/partners-5.svg',
    },
    {
      img: 'assets/img/partners/partners-6.svg',
    },
    {
      img: 'assets/img/partners/partners-1.svg',
    },
    {
      img: 'assets/img/partners/partners-2.svg',
    },
    {
      img: 'assets/img/partners/partners-3.svg',
    },
    {
      img: 'assets/img/partners/partners-4.svg',
    },
    {
      img: 'assets/img/partners/partners-5.svg',
    },
    {
      img: 'assets/img/partners/partners-6.svg',
    },
  ];

  public listingcategory = [
    {
      img: 'assets/img/icons/category-1.svg',
      headline: 'Automotive',
      adcount: '09 Ads',
      description: 'Lorem Ipsum is simply dummy text of the typewriting',
    },
    {
      img: 'assets/img/icons/category-2.svg',
      headline: 'Electronics',
      adcount: '09 Ads',
      description: 'Lorem Ipsum is simply dummy text of the typewriting',
    },
    {
      img: 'assets/img/icons/category-3.svg',
      headline: 'Fashion Style',
      adcount: '09 Ads',
      description: 'Lorem Ipsum is simply dummy text of the typewriting',
    },
    {
      img: 'assets/img/icons/category-4.svg',
      headline: 'Health Care',
      adcount: '09 Ads',
      description: 'Lorem Ipsum is simply dummy text of the typewriting',
    },
    {
      img: 'assets/img/icons/category-5.svg',
      headline: 'Job Board',
      adcount: '09 Ads',
      description: 'Lorem Ipsum is simply dummy text of the typewriting',
    },
    {
      img: 'assets/img/icons/category-6.svg',
      headline: 'Education',
      adcount: '09 Ads',
      description: 'Lorem Ipsum is simply dummy text of the typewriting',
    },
    {
      img: 'assets/img/icons/category-7.svg',
      headline: 'Real Estate',
      adcount: '09 Ads',
      description: 'Lorem Ipsum is simply dummy text of the typewriting',
    },
    {
      img: 'assets/img/icons/category-8.svg',
      headline: 'Travel',
      adcount: '09 Ads',
      description: 'Lorem Ipsum is simply dummy text of the typewriting',
    },
    {
      img: 'assets/img/icons/category-9.svg',
      headline: 'Sports & Game',
      adcount: '09 Ads',
      description: 'Lorem Ipsum is simply dummy text of the typewriting',
    },
    {
      img: 'assets/img/icons/category-10.svg',
      headline: 'Magazines',
      adcount: '09 Ads',
      description: 'Lorem Ipsum is simply dummy text of the typewriting',
    },
    {
      img: 'assets/img/icons/category-11.svg',
      headline: 'Pet & Animal',
      adcount: '09 Ads',
      description: 'Lorem Ipsum is simply dummy text of the typewriting',
    },
    {
      img: 'assets/img/icons/category-12.svg',
      headline: 'House Hold',
      adcount: '09 Ads',
      description: 'Lorem Ipsum is simply dummy text of the typewriting',
    },
  ];

  public dashboarddata = [
    {
      img: 'assets/img/icons/verified.svg',
      title: 'Active Listing',
      amount: '500',
    },
    {
      img: 'assets/img/icons/rating.svg',
      title: 'Total Reviews',
      amount: '15230',
    },
    {
      img: 'assets/img/icons/chat.svg',
      title: 'Messages',
      amount: '15',
    },
    {
      img: 'assets/img/icons/bookmark.svg',
      title: 'Bookmark',
      amount: '30',
    },
  ];
  public electronicsList = [
    {
      details: 'Villa 457 sq.m. In Benidorm Fully Qquipped House',
      img: 'assets/img/list/tablelist-1.jpg',
      description: 'Mauris vestibulum lorem a condimentum vulputate.',
      status: 'Published',
      view: '1523',
      select: 'Electronics',
      oldamount: '$350000.00',
      newamount: '$40000',
    },
    {
      details: 'CDL A OTR Compnay Driver Job-N',
      img: 'assets/img/list/tablelist-2.jpg',
      description: 'Mauris vestibulum lorem a condimentum vulputate.',
      status: 'Published',
      view: '1523',
      select: 'Electronics',
      oldamount: '$350000.00',
      newamount: '$40000',
    },
    {
      details: 'HP Gaming 15.6 Touchscren 12G',
      img: 'assets/img/list/tablelist-3.jpg',
      description: 'Mauris vestibulum lorem a condimentum vulputate.',
      status: 'Published',
      view: '1523',
      select: 'Electronics',
      oldamount: '$350000.00',
      newamount: '$40000',
    },
    {
      details: '2012 AudiR8  GT Spider Convrtibile',
      img: 'assets/img/list/tablelist-4.jpg',
      description: 'Mauris vestibulum lorem a condimentum vulputate.',
      status: 'Published',
      view: '1523',
      select: 'Electronics',
      oldamount: '$350000.00',
      newamount: '$40000',
    },
    {
      details: '2017 Gulfsteam Ameri-Lite',
      img: 'assets/img/list/tablelist-5.jpg',
      description: 'Mauris vestibulum lorem a condimentum vulputate.',
      status: 'Published',
      view: '1523',
      select: 'Electronics',
      oldamount: '$350000.00',
      newamount: '$40000',
    },
    {
      details: 'Fashion Luxury Men Date',
      img: 'assets/img/list/tablelist-6.jpg',
      description: 'Mauris vestibulum lorem a condimentum vulputate.',
      status: 'Published',
      view: '1523',
      select: 'Electronics',
      oldamount: '$350000.00',
      newamount: '$40000',
    },
    {
      details: 'Apple iPhone 6 16GB 4G LTE',
      img: 'assets/img/list/tablelist-7.jpg',
      description: 'Mauris vestibulum lorem a condimentum vulputate.',
      status: 'Published',
      view: '1523',
      select: 'Electronics',
      oldamount: '$350000.00',
      newamount: '$40000',
    },
    {
      details: 'Customized Apple iMac 21.5″ All-In ',
      img: 'assets/img/list/tablelist-8.jpg',
      description: 'Mauris vestibulum lorem a condimentum vulputate.',
      status: 'Un Published',
      view: '1523',
      select: 'Electronics',
      oldamount: '$350000.00',
      newamount: '$40000',
    },
  ];
  public Bookmarksdata = [
    {
      img1: 'assets/img/list/listgrid-1.jpg',
      headline: 'Featured',
      img2: 'assets/img/profiles/avatar-02.jpg',
      eye: 'assets/img/eye.svg',
      search: '4000 ',
      select: '  Vehicles',
      details: '2017 Gulfsteam Ameri-lite',
      map: 'Los Angeles',
      date: '06 Oct, 2022',
      amount: '$350',
      oldamount: '$450',
      rating: '4.7',
      rating1: '(50)',
    },
    {
      img1: 'assets/img/list/listgrid-4.jpg',
      headline: 'Featured',
      img2: 'assets/img/profiles/avatar-03.jpg',
      eye: 'assets/img/eye.svg',
      search: '4000 ',
      select: 'Electronics',
      details: 'Fashion luxury Men date',
      map: 'Los Angeles',
      date: '08 Oct, 2022',
      amount: '$250',
      oldamount: '$350',
      rating: '4.6',
      rating1: '(50)',
    },
    {
      img1: 'assets/img/list/listgrid-8.jpg',
      headline: 'Featured',
      img2: 'assets/img/profiles/avatar-04.jpg  ',
      eye: 'assets/img/eye.svg',
      search: '4000 ',
      select: '  Electronics',
      details: 'Apple Iphone 6 16GB 4G LTE',
      map: 'Los Angeles',
      date: '09 Oct, 2022',
      amount: '$550',
      oldamount: '$400',
      rating: '4.7',
      rating1: '(50)',
    },
    {
      img1: 'assets/img/list/listgrid-3.jpg',
      headline: 'Featured',
      img2: 'assets/img/profiles/avatar-05.jpg',
      eye: 'assets/img/eye.svg',
      search: '4000 ',
      select: ' Gadgets',
      details: 'Customized Apple Imac',
      map: 'Los Angeles',
      date: '10 Oct, 2022',
      amount: '$450',
      oldamount: '$300',
      rating: '4.5',
      rating1: '(50)',
    },
    {
      img1: 'assets/img/list/listgrid-2.jpg',
      headline: 'Featured',
      img2: 'assets/img/profiles/avatar-06.jpg',
      eye: 'assets/img/eye.svg',
      search: '4000 ',
      select: '  Construction',
      details: 'Villa 457 sq.m. In Benidorm Fully',
      map: 'Los Angeles',
      date: '11 Oct, 2022',
      amount: '$650',
      oldamount: '$600',
      rating: '4.5',
      rating1: '(50)',
    },
    {
      img1: 'assets/img/list/listgrid-5.jpg',
      headline: 'Featured',
      img2: 'assets/img/profiles/avatar-03.jpg',
      eye: 'assets/img/eye.svg',
      search: '4000 ',
      select: '  Jobs',
      details: 'CDL A OTR Compnay Driver Job-N',
      map: 'Los Angeles',
      date: '12 Oct, 2022',
      amount: '$550',
      oldamount: '$450',
      rating: '4.7',
      rating1: '(50)',
    },

    {
      img1: 'assets/img/list/listgrid-6.jpg',
      headline: 'Featured',
      img2: 'assets/img/profiles/avatar-03.jpg',
      eye: 'assets/img/eye.svg',
      search: '4000 ',
      select: '  Electronics',
      details: '2012 Audi R8 GT Spyder Convertibl',
      map: 'Los Angeles',
      date: '12 Oct, 2022',
      amount: '$550',
      oldamount: '$450',
      rating: '4.7',
      rating1: '(50)',
    },
    {
      img1: 'assets/img/list/listgrid-7.jpg',
      headline: 'Featured',
      img2: 'assets/img/profiles/avatar-07.jpg',
      eye: 'assets/img/eye.svg',
      search: '4000 ',
      select: '   Vehicles',
      details: 'HP Gaming 15.6 Touchscren 12G',
      map: 'Los Angeles',
      date: ' 02 Oct, 2022',
      amount: '$450',
      oldamount: '$350',
      rating: '4.7',
      rating1: '(50)',
    },
    {
      img1: 'assets/img/list/listgrid-1.jpg',
      headline: 'Featured',
      img2: 'assets/img/profiles/avatar-02.jpg',
      eye: 'assets/img/eye.svg',
      search: '4000 ',
      select: 'Vehicles',
      details: '2017 Gulfsteam Ameri-lite',
      map: 'Los Angeles',
      date: '06 Oct, 2022',
      amount: '$350',
      oldamount: '$450',
      rating: '4.7',
      rating1: '(50)',
    },
  ];

  public reviewdata = [
    {
      reviewType: 'Visitor Review',
      dropdown: 'All Listing',
      menu: 'Next Week',
      menu1: 'Last Month',
      menu2: 'Next Month',
      reviewimg1: 'assets/img/profiles/avatar-11.jpg',
      reviewername1: 'Joseph',
      reviewedby: 'by: Joseph',
      month: '4 months ago',
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy.",
      reviewgallery: 'assets/img/gallery/review-1.jpg',
      gallery2: 'assets/img/gallery/review-2.jpg',
      gallery3: 'assets/img/gallery/review-3.jpg',
      gallery: 'assets/img/gallery/review-4.jpg',
      reviewimg2: 'assets/img/profiles/avatar-01.jpg',
      reviewername2: 'Dev',
      month2: '6 months ago',
      reviewedby1: 'by: Joseph',
      feedback2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy.",
      reviewimg3: 'assets/img/profiles/avatar-01.jpg',
      reviewername3: 'Jonson',
      month3: '8 months ago',
      reviewedby2: 'by: Joseph',
      feedback3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy.",
      reviewgallery2: 'assets/img/gallery/review-1.jpg',
      gallery4: 'assets/img/gallery/review-2.jpg',
      gallery5: 'assets/img/gallery/review-3.jpg',
      gallery6: 'assets/img/gallery/review-4.jpg',
    },
    {
      reviewType: 'Your Review',
      dropdown: 'All Listing',
      menu: 'Next Week',
      menu1: 'Last Month',
      menu2: 'Next Month',
      reviewimg1: 'assets/img/profile-img.jpg',
      reviewername1: 'John Doe',
      reviewedby: 'by: John Doe',
      month: '4 months ago',
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy.",
      reviewgallery: 'assets/img/gallery/review-1.jpg',
      gallery2: 'assets/img/gallery/review-2.jpg',
      gallery3: 'assets/img/gallery/review-3.jpg',
      gallery: 'assets/img/gallery/review-4.jpg',
      reviewimg2: 'assets/img/profile-img.jpg',
      reviewername: 'John Doe',
      month2: '6 months ago',
      reviewedby1: 'by: John Doe',
      feedback2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy.",
      reviewimg3: 'assets/img/profiles/avatar-01.jpg',
      reviewername3: 'Jonson',
      month3: ' 11 months ago',
      reviewedby2: 'by: John Doe',
      feedback3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy.",
      reviewgallery2: 'assets/img/gallery/review-1.jpg',
      gallery4: 'assets/img/gallery/review-2.jpg',
      gallery5: 'assets/img/gallery/review-3.jpg',
      gallery6: 'assets/img/gallery/review-4.jpg',
    },
  ];
  public dashboardreview = [
    {
      img: 'assets/img/profiles/avatar-11.jpg',
      name: 'Joseph',
      month: '4 months ago',
      reviewdby: 'by: Demo Test',
      feedback:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      img: 'assets/img/profiles/avatar-01.jpg',
      name: 'Dev',
      month: '4 months ago',
      reviewdby: 'by: Demo Test',
      feedback:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
  public accountcreation = [
    {
      number: '01',
      process: 'Create Account',
      details:
        'Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus. Maecenas tincidunt, ligula sed congue tempus, magna augue cursus ipsum, in malesuada justo risus nec lorem. Nam augue augue, mollis nec condimentum euismod, lacinia ultricies leo.',
    },
    {
      number: '02',
      process: 'Post An Ad',
      details:
        'Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus. Maecenas tincidunt, ligula sed congue tempus, magna augue cursus ipsum, in malesuada justo risus nec lorem. Nam augue augue, mollis nec condimentum euismod, lacinia ultricies leo.',
    },
    {
      number: '03',
      process: 'Find,Buy & Own Dreams',
      details:
        'Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus. Maecenas tincidunt, ligula sed congue tempus, magna augue cursus ipsum, in malesuada justo risus nec lorem. Nam augue augue, mollis nec condimentum euismod, lacinia ultricies leo.',
    },
  ];

  public lovedata = [
    {
      img: 'assets/img/celebrate.jpg',
    },
    {
      img: 'assets/img/celebrate-01.jpg',
    },
  ];
  public shops = [
    {
      img: 'assets/img/recommended/gallery-1.jpg',
      title: 'best seller',
      servicedetails: 'America – Grand canyon, Golden Gate',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$42',
      rating: ' 4.9',
      review: '(2,312 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-2.jpg',
      title: 'top rated',
      servicedetails: 'Argentina – Great Diving Trip',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$72',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-3.jpg',
      title: 'best seller',
      servicedetails: 'Brazil – Rio de Janeiro',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$45',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-4.jpg',
      title: 'Break Fast Included',
      servicedetails: 'India – Mumbai, New Delhi',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$72',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-1.jpg',
      title: 'best seller',
      servicedetails: 'Lorem Ipsum is simply dummy text of the printing',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$72',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
  ];
  public business = [
    {
      img: 'assets/img/recommended/gallery-1.jpg',
      title: 'best seller',
      servicedetails: 'America – Grand canyon, Golden Gate',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$42',
      rating: ' 4.9',
      review: '(2,312 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-2.jpg',
      title: 'top rated',
      servicedetails: 'Argentina – Great Diving Trip',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$72',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-3.jpg',
      title: 'best seller',
      servicedetails: 'Brazil – Rio de Janeiro',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$45',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-4.jpg',
      title: 'Break Fast Included',
      servicedetails: 'India – Mumbai, New Delhi',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$72',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-1.jpg',
      title: 'best seller',
      servicedetails: 'Lorem Ipsum is simply dummy text of the printing',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$72',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
  ];
  public lifestyle = [
    {
      img: 'assets/img/recommended/gallery-1.jpg',
      title: 'best seller',
      servicedetails: 'America – Grand canyon, Golden Gate',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$42',
      rating: ' 4.9',
      review: '(2,312 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-2.jpg',
      title: 'top rated',
      servicedetails: 'Argentina – Great Diving Trip',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$72',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-3.jpg',
      title: 'best seller',
      servicedetails: 'Brazil – Rio de Janeiro',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$45',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-4.jpg',
      title: 'Break Fast Included',
      servicedetails: 'India – Mumbai, New Delhi',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$72',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-1.jpg',
      title: 'best seller',
      servicedetails: 'Lorem Ipsum is simply dummy text of the printing',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$72',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
  ];
  public amazingwork = [
    {
      img: 'assets/img/gallery/gallery-01.jpg',
      overlay1: 'Wedding Venues',
      overlay2: '15 Photos and 5 Videos',
      img2: 'assets/img/gallery/gallery-02.jpg',
      overlay3: 'Wedding Venues',
      overlay4: '55 Photos and 5 Videos',
      img3: 'assets/img/gallery/gallery-03.jpg',
      overlay5: 'Wedding Venues',
      overlay6: '135 Photos and 5 Videos',
      img4: 'assets/img/gallery/gallery-04.jpg',
      overlay7: 'Wedding Venues',
      overlay8: '115 Photos and 5 Videos',
      img5: 'assets/img/gallery/gallery-05.jpg',
      overlay9: 'Wedding Venues',
      overlay10: '155 Photos and 5 Videos',
      img6: 'assets/img/gallery/gallery-06.jpg',
      overlay11: 'Wedding Venues',
      overlay12: '155 Photos and 5 Videos',
    },
    {
      img: 'assets/img/gallery/gallery-02.jpg',
      overlay1: 'Wedding Venues',
      overlay2: '155 Photos and 5 Videos',
      img2: 'assets/img/gallery/gallery-01.jpg',
      overlay3: 'Wedding Venues',
      overlay4: '155 Photos and 5 Videos',
      img3: 'assets/img/gallery/gallery-03.jpg',
      overlay5: 'Wedding Venues',
      overlay6: '155 Photos and 5 Videos',
      img4: 'assets/img/gallery/gallery-04.jpg',
      overlay7: 'Wedding Venues',
      overlay8: '155 Photos and 5 Videos',
      img5: 'assets/img/gallery/gallery-05.jpg',
      overlay9: 'Wedding Venues',
      overlay10: '155 Photos and 5 Videos',
      img6: 'assets/img/gallery/gallery-06.jpg',
      overlay11: 'Wedding Venues',
      overlay12: '155 Photos and 5 Videos',
    },
  ];
  public trendingplace = [
    {
      img: 'assets/img/business/business-01.jpg',
      title: 'Featured',
      img2: 'assets/img/profiles/avatar-03.jpg',
      subtitle1: 'Restaurant',
      subtitle2: 'Paris',
      place: 'Mattone Restaurant',
      currentamount: '$350',
      oldamount: '$450',
      rating: '4.7',
      rating1: '(50)',
    },
    {
      img: 'assets/img/business/business-02.jpg',
      title: 'Featured',
      img2: 'assets/img/profiles/avatar-03.jpg',
      subtitle1: 'Fitness',
      subtitle2: 'New York',
      place: 'Gym Equipment',
      currentamount: '$370',
      oldamount: '$470',
      rating: '4.7',
      rating1: '(50)',
    },
    {
      img: 'assets/img/business/business-03.jpg',
      title: 'Featured',
      img2: 'assets/img/profiles/avatar-04.jpg',
      subtitle1: 'Beauty Care',
      subtitle2: 'Australia',
      place: 'Beauty Parlour',
      currentamount: '$300',
      oldamount: '$450',
      rating: '4.7',
      rating1: '(50)',
    },
    {
      img: 'assets/img/business/business-04.jpg',
      title: 'Featured',
      img2: 'assets/img/profiles/avatar-05.jpg',
      subtitle1: ' Shopping',
      subtitle2: ' Texas',
      place: 'Shop Mall',
      currentamount: '$250',
      oldamount: '$370',
      rating: '4.7',
      rating1: '(50)',
    },
    {
      img: 'assets/img/business/business-02.jpg',
      title: 'Featured',
      img2: 'assets/img/profiles/avatar-06.jpg',
      subtitle1: ' Gym',
      subtitle2: '  Florida',
      place: 'Gym Equipment',
      currentamount: '$330',
      oldamount: '$350',
      rating: '4.7',
      rating1: '(50)',
    },
  ];
  public businessslider = [
    {
      img: 'assets/img/latest/latest-01.jpg',
      title: 'Featured',
      img2: 'assets/img/profiles/avatar-03.jpg',
      subtitle1: 'Restaurant',
      subtitle2: 'Paris',
      place: 'Mattone Restaurant',
      currentamount: '$350',
      oldamount: '$450',
      rating: '4.7',
      rating1: '(50)',
    },
    {
      img: 'assets/img/latest/latest-02.jpg',
      title: 'Featured',
      img2: 'assets/img/profiles/avatar-02.jpg',
      subtitle1: ' Lodging',
      subtitle2: ' New York',
      place: 'Lodging',
      currentamount: '$370',
      oldamount: '$470',
      rating: '4.7',
      rating1: '(50)',
    },
    {
      img: 'assets/img/latest/latest-03.jpg',
      title: 'Featured',
      img2: 'assets/img/profiles/avatar-04.jpg',
      subtitle1: ' Outdoors',
      subtitle2: '  Australia',
      place: 'Outdoors',
      currentamount: '$300',
      oldamount: '$450',
      rating: '4.7',
      rating1: '(50)',
    },
    {
      img: 'assets/img/latest/latest-04.jpg',
      title: 'Featured',
      img2: 'assets/img/profiles/avatar-05.jpg',
      subtitle1: 'Automotive',
      subtitle2: 'Texas',
      place: 'Automotive',
      currentamount: '$250',
      oldamount: '$370',
      rating: '4.7',
      rating1: '(50)',
    },
    {
      img: 'assets/img/latest/latest-02.jpg',
      title: 'Featured',
      img2: 'assets/img/profiles/avatar-06.jpg',
      subtitle1: '  Lodging',
      subtitle2: ' Florida',
      place: 'Lodging',
      currentamount: '$330',
      oldamount: '$350',
      rating: '4.7',
      rating1: '(50)',
    },
  ];
  public customersays = [
    {
      heading: 'It was a wonderful experience',
      para: 'Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas',
      img: 'assets/img/testimonial-1.jpg',
      name: 'Dev',
    },
    {
      heading: 'It was a very good experience',
      para: 'Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem volupta',
      img: 'assets/img/testimonial-2.jpg',
      name: 'Esther Hills',
    },
    {
      heading: 'It was a good experience',
      para: 'Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas',
      img: 'assets/img/testimonial-3.jpg',
      name: 'Hannah Schmitt',
    },
  ];
  public trendingsearch = [
    {
      img: './assets/img/work/trending-car-1.jpg',
      sentance: 'Used Cars price from $20,000',
    },
    {
      img: './assets/img/work/trending-car-2.jpg',
      sentance: 'Low Mileage Pickup Trucks',
    },
    {
      img: './assets/img/work/trending-car-3.jpg',
      sentance: 'Family Cars from $10,000',
    },
    {
      img: './assets/img/work/trending-car-4.jpg',
      sentance: 'Cars price more than $5,000',
    },
    {
      img: './assets/img/work/trending-car-5.jpg',
      sentance: 'Family Cars from $10,000',
    },
    {
      img: './assets/img/work/trending-car-2.jpg',
      sentance: 'Low Mileage Pickup Trucks',
    },
  ];
  public choosecar = [
    {
      name: 'Suv',
      stock: '30 Cars Available',
      img: './assets/img/cars-class-1.png',
    },
    {
      name: 'Sports',
      stock: '30 Cars Available',
      img: './assets/img/cars-class-4.png',
    },
    {
      name: 'Coupe',
      stock: '30 Cars Available',
      img: './assets/img/cars-class-2.png',
    },
    {
      name: 'Sedan',
      stock: '30 Cars Available',
      img: './assets/img/cars-class-5.png',
    },
    {
      name: 'Luxury',
      stock: '30 Cars Available',
      img: './assets/img/cars-class-3.png',
    },
    {
      name: 'Vip Cars',
      stock: '30 Cars Available',
      img: './assets/img/cars-class-6.png',
    },
    {
      name: 'Suv',
      stock: '30 Cars Available',
      img: './assets/img/cars-class-1.png',
    },
    {
      name: 'Sports',
      stock: '30 Cars Available',
      img: './assets/img/cars-class-4.png',
    },
    {
      name: 'Coupe',
      stock: '30 Cars Available',
      img: './assets/img/cars-class-2.png',
    },
  ];
  public Makecar = [
    {
      name: 'Audi',
      stock: '(30)',
      img: './assets/img/partners/brand-1.png',
    },
    {
      name: 'KIA',
      stock: '(30)',
      img: './assets/img/partners/brand-2.png',
    },
    {
      name: 'Honda',
      stock: '(30)',
      img: './assets/img/partners/brand-3.png',
    },
    {
      name: 'Chevorlet',
      stock: '(30)',
      img: './assets/img/partners/brand-4.png',
    },
    {
      name: 'Nissan',
      stock: '(30)',
      img: './assets/img/partners/brand-5.png',
    },
    {
      name: 'Bently ',
      stock: '(30)',
      img: './assets/img/partners/brand-6.png',
    },
    {
      name: 'Audi ',
      stock: '(30)',
      img: './assets/img/partners/brand-1.png',
    },
  ];
  public Topbrand = [
    {
      img: './assets/img/featured/feature-car-1.jpg',
      centerlisth: 'Manufactured',
      centerlistp: '2010',
      centerlisth1: 'Total',
      centerlistp1: '20000 KM',
      centerlist2: 'Engine',
      centerlistp2: 'Petrol',
      centerlist3: 'Car Type',
      centerlistp3: 'Automatic',
      brand: 'Coupe',
      name: 'AG MC Ford Raptor',
      bottomp:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, aliquid ex commodi minima veniam',
      img1: './assets/img/profiles/avatar-02.jpg',
      dealer: 'Dealer :',
      dealername: 'Mic Harzdeni',
      amount: '$25000',
    },
    {
      img: './assets/img/featured/feature-car-2.jpg',
      centerlisth: 'Manufactured',
      centerlistp: '2000',
      centerlisth1: 'Total',
      centerlistp1: '2040 KM',
      centerlist2: 'Engine',
      centerlistp2: 'Desiel',
      centerlist3: 'Car Type',
      centerlistp3: 'Manual',
      brand: 'Coupe',
      name: 'Benz G-Class',
      bottomp:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, aliquid ex commodi minima veniam',
      img1: './assets/img/profiles/avatar-04.jpg',
      dealer: 'Dealer :',
      dealername: 'Rebecca',
      amount: '$25000',
    },
    {
      img: './assets/img/featured/feature-car-3.jpg',
      centerlisth: 'Manufactured',
      centerlistp: '2020',
      centerlisth1: 'Total',
      centerlistp1: '5000 KM',
      centerlist2: 'Engine',
      centerlistp2: 'Hybrid',
      centerlist3: 'Car Type',
      centerlistp3: 'Automatic',
      brand: 'Coupe',
      name: 'Toyota Camry',
      bottomp:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, aliquid ex commodi minima veniam',
      img1: './assets/img/profiles/avatar-05.jpg',
      dealer: 'Dealer :',
      dealername: 'Fernanderz',
      amount: '$81000',
    },
    {
      img: './assets/img/featured/feature-car-4.png',
      centerlisth: 'Manufactured',
      centerlistp: '2000',
      centerlisth1: 'Total',
      centerlistp1: '2040 KM',
      centerlist2: 'Engine',
      centerlistp2: 'Desiel',
      centerlist3: 'Car Type',
      centerlistp3: 'Manual',
      brand: 'Coupe',
      name: 'Benz G-Class',
      bottomp:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, aliquid ex commodi minima veniam',
      img1: './assets/img/profiles/avatar-08.jpg',
      dealer: 'Dealer :',
      dealername: 'Rebecca',
      amount: '$43000',
    },
  ];
  public Rentcar = [
    {
      img: './assets/img/car-rental-slider-img.jpg',
      Edition: 'Limited Edition',
      name: '2021 Jaguar XF facelift',
      rentamount: '$400',
      month: '/ Month',
      para: '$0 First payment paid by jaquar up to $325',
      para1: 'taxes, title and fees extra',
    },
    {
      img: './assets/img/car-rental-slider-img-2.jpg',
      Edition: 'Limited Edition',
      name: '2021 Audi RS7',
      rentamount: '$450',
      month: '/ Month',
      para: '$0 First payment paid by jaquar up to $453',
      para1: 'taxes, title and fees extra',
    },
  ];
  public Teammembers = [
    {
      img: './assets/img/business/team-1.jpg',
      name: 'Joana Dewel',
      position: 'Car Dealer',
    },
    {
      img: './assets/img/business/team-2.jpg',
      name: 'Mark Antonio',
      position: 'Car Dealer',
    },
    {
      img: './assets/img/business/team-3.jpg',
      name: 'Alexander Rebel',
      position: 'Car Dealer',
    },
    {
      img: './assets/img/business/team-4.jpg',
      name: 'Richerd Dewel',
      position: 'Car Dealer',
    },
    {
      img: './assets/img/business/team-5.jpg',
      name: 'John Dew',
      position: 'Car Dealer',
    },
  ];
  public clienttestimonials = [
    {
      img: './assets/img/Polygon.svg',
      name: 'Daniela Fransis',
      from: 'Customer',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content',
      img2: './assets/img/profiles/avatar-12.jpg',
    },
    {
      img: './assets/img/Polygon.svg',
      name: 'Alexander Rebel',
      from: 'Customer',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content',
      img2: './assets/img/profiles/avatar-13.jpg',
    },
    {
      img: './assets/img/Polygon.svg',
      name: 'Mark Antonio',
      from: 'Customer',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content',
      img2: './assets/img/profiles/avatar-14.jpg',
    },
    {
      img: './assets/img/Polygon.svg',
      name: 'Daniela Fransis',
      from: 'Customer',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content',
      img2: './assets/img/profiles/avatar-12.jpg',
    },
  ];
  public peopleFeedback = [
    {
      img: 'assets/img/profiles/avatar-01.jpg',
      name: 'Lisa',
      head: 'Great Services!!!',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eu aliquam consequat  morbi leo. Pharetra lacus vitae nisl porttitor duis. In et velit turpis nislvulputate in nunc, habitant eget. Dui',
      place: 'Radon Restaurant',
      city: 'London',
    },
    {
      img: 'assets/img/profiles/avatar-02.jpg',
      name: 'John Doe',
      head: 'Good !!!',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eu aliquam consequat  morbi leo. Pharetra lacus vitae nisl porttitor duis. In et velit turpis nislvulputate in nunc, habitant eget. Dui',
      place: 'Food Trucks',
      city: 'Mexico',
    },
    {
      img: 'assets/img/profiles/avatar-03.jpg',
      name: 'William',
      head: 'Nice !!!',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eu aliquam consequat  morbi leo. Pharetra lacus vitae nisl porttitor duis. In et velit turpis nislvulputate in nunc, habitant eget. Dui',
      place: 'Pop-up Restaurants',
      city: 'Canada',
    },
    {
      img: 'assets/img/profiles/avatar-04.jpg',
      name: 'Lisa',
      head: 'Wonderful!!!',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eu aliquam consequat  morbi leo. Pharetra lacus vitae nisl porttitor duis. In et velit turpis nislvulputate in nunc, habitant eget. Dui',
      place: 'Fine Dining Restaurant',
      city: 'Australia',
    },
  ];
  public jobholder = [
    {
      img: 'assets/img/profiles/avatar-02.jpg',
      name: 'Kirsten',
      position: 'Marketing Manager',
      para: 'Ulink is user-friendly and accessible. It’s the one-stop-shop for all link-associated things.',
    },
    {
      img: 'assets/img/profiles/avatar-03.jpg',
      name: 'Alfred',
      position: 'Graphic Designer',
      para: 'The more I use Ulink, the more valuable it becomes to me. It cuts my time down because it saves all my information, and it gives me insight into which links are most popular and have the most clicks.',
    },
    {
      img: 'assets/img/profiles/avatar-04.jpg',
      name: 'Kirsten',
      position: 'Marketing Manager',
      para: 'Ulink has enabled us to build trust with clients by giving them branded short links that carry the main message of the link and that carries our brand. Bitly also gives us data analytics on who is clicking our links which helps us carry the clients forward in the advertising process.',
    },
    {
      img: 'assets/img/profiles/avatar-01.jpg',
      name: 'Mike Torello',
      head: 'Mexico',
      para: 'Our goal was to implement a system that would not interrupt the gameplay experience when a new update was announced, and we found QR Codes to be the perfect answer.',
    },
    {
      img: 'assets/img/profiles/avatar-04.jpg',
      name: 'Kirsten',
      position: 'Marketing Manager',
      para: 'Ulink is user-friendly and accessible. It’s the one-stop-shop for all link-associated things.',
    },
  ];
}
