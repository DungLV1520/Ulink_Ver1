export class ContentRegister {
  alias_register?: string;
  url_normal_user?: string;
  url_manager_fb_user?: string;
  title?: string;
  type: string = 'article';
  description?: string;
  thumbnail?: string;
  width?: number;
  height?: number;
  constructor() {}
}

export class RegisterDomain {
  type: string = 'FACEBOOK';
  source_page: string = 'https://ulink.asia';
  url_original?: string;
  user_id?: number;
  setting_advanced: boolean = false;
  content: ContentRegister = new ContentRegister();
  constructor() {}
}
