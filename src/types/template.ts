export interface Template {
  name: string;
  properties: TemplateProperty[];
}

export interface TemplateProperty {
  name: string;
}

export interface TextProperty extends TemplateProperty {
  text: string;
  color: string;
  font: string;
}

export interface ImageProperty extends TemplateProperty {
  path: string;
}

export interface BackgroundProperty extends TemplateProperty {
  color: string;
  gradientDirection: string;
}
