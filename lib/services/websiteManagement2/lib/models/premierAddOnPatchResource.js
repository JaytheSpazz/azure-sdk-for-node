/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * ARM resource for a PremierAddOn.
 *
 * @extends models['ProxyOnlyResource']
 */
class PremierAddOnPatchResource extends models['ProxyOnlyResource'] {
  /**
   * Create a PremierAddOnPatchResource.
   * @member {string} [sku] Premier add on SKU.
   * @member {string} [product] Premier add on Product.
   * @member {string} [vendor] Premier add on Vendor.
   * @member {string} [marketplacePublisher] Premier add on Marketplace
   * publisher.
   * @member {string} [marketplaceOffer] Premier add on Marketplace offer.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PremierAddOnPatchResource
   *
   * @returns {object} metadata of PremierAddOnPatchResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PremierAddOnPatchResource',
      type: {
        name: 'Composite',
        className: 'PremierAddOnPatchResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          sku: {
            required: false,
            serializedName: 'properties.sku',
            type: {
              name: 'String'
            }
          },
          product: {
            required: false,
            serializedName: 'properties.product',
            type: {
              name: 'String'
            }
          },
          vendor: {
            required: false,
            serializedName: 'properties.vendor',
            type: {
              name: 'String'
            }
          },
          marketplacePublisher: {
            required: false,
            serializedName: 'properties.marketplacePublisher',
            type: {
              name: 'String'
            }
          },
          marketplaceOffer: {
            required: false,
            serializedName: 'properties.marketplaceOffer',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PremierAddOnPatchResource;