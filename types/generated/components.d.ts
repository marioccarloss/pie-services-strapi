import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.feature': SectionsFeature;
    }
  }
}
