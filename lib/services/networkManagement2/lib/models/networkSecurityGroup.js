/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NetworkSecurityGroup class.
 * @constructor
 * NetworkSecurityGroup resource
 * @member {string} [etag] Gets a unique read-only string that changes
 * whenever the resource is updated
 * 
 * @member {array} [securityRules] Gets or sets Security rules of network
 * security group
 * 
 * @member {array} [defaultSecurityRules] Gets or sets Default security rules
 * of network security group
 * 
 * @member {array} [networkInterfaces] Gets collection of references to
 * Network Interfaces
 * 
 * @member {array} [subnets] Gets collection of references to subnets
 * 
 * @member {string} [resourceGuid] Gets or sets resource guid property of the
 * network security group resource
 * 
 * @member {string} [provisioningState] Gets or sets Provisioning state of the
 * PublicIP resource Updating/Deleting/Failed
 * 
 */
function NetworkSecurityGroup() {
  NetworkSecurityGroup['super_'].call(this);
}

util.inherits(NetworkSecurityGroup, models['Resource']);

/**
 * Defines the metadata of NetworkSecurityGroup
 *
 * @returns {object} metadata of NetworkSecurityGroup
 *
 */
NetworkSecurityGroup.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NetworkSecurityGroup',
    type: {
      name: 'Composite',
      className: 'NetworkSecurityGroup',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: false,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        etag: {
          required: false,
          serializedName: 'etag',
          type: {
            name: 'String'
          }
        },
        securityRules: {
          required: false,
          serializedName: 'properties.securityRules',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'SecurityRuleElementType',
                type: {
                  name: 'Composite',
                  className: 'SecurityRule'
                }
            }
          }
        },
        defaultSecurityRules: {
          required: false,
          serializedName: 'properties.defaultSecurityRules',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'SecurityRuleElementType',
                type: {
                  name: 'Composite',
                  className: 'SecurityRule'
                }
            }
          }
        },
        networkInterfaces: {
          required: false,
          serializedName: 'properties.networkInterfaces',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'NetworkInterfaceElementType',
                type: {
                  name: 'Composite',
                  className: 'NetworkInterface'
                }
            }
          }
        },
        subnets: {
          required: false,
          serializedName: 'properties.subnets',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'SubnetElementType',
                type: {
                  name: 'Composite',
                  className: 'Subnet'
                }
            }
          }
        },
        resourceGuid: {
          required: false,
          serializedName: 'properties.resourceGuid',
          type: {
            name: 'String'
          }
        },
        provisioningState: {
          required: false,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = NetworkSecurityGroup;