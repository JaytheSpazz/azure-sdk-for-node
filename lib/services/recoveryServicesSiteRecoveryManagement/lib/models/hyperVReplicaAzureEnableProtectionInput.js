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
 * Azure specific enable protection input.
 *
 * @extends models['EnableProtectionProviderSpecificInput']
 */
class HyperVReplicaAzureEnableProtectionInput extends models['EnableProtectionProviderSpecificInput'] {
  /**
   * Create a HyperVReplicaAzureEnableProtectionInput.
   * @member {string} [hvHostVmId] The Hyper-V host Vm Id.
   * @member {string} [vmName] The Vm Name.
   * @member {string} [osType] The OS type associated with vm.
   * @member {string} [vhdId] The OS disk VHD id associated with vm.
   * @member {string} [targetStorageAccountId] The storage account name.
   * @member {string} [targetAzureNetworkId] The selected target Azure network
   * Id.
   * @member {string} [targetAzureSubnetId] The selected target Azure subnet
   * Id.
   * @member {string} [enableRDPOnTargetOption] The selected option to enable
   * RDP\SSH on target vm after failover. String value of
   * {SrsDataContract.EnableRDPOnTargetOption} enum.
   * @member {string} [targetAzureVmName] The target azure Vm Name.
   * @member {string} [logStorageAccountId] The storage account to be used for
   * logging during replication.
   * @member {array} [disksToInclude] The list of VHD IDs of disks to be
   * protected.
   * @member {string} [targetAzureV1ResourceGroupId] The Id of the target
   * resource group (for classic deployment) in which the failover VM is to be
   * created.
   * @member {string} [targetAzureV2ResourceGroupId] The Id of the target
   * resource group (for resource manager deployment) in which the failover VM
   * is to be created.
   * @member {string} [useManagedDisks] A value indicating whether managed
   * disks should be used during failover.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HyperVReplicaAzureEnableProtectionInput
   *
   * @returns {object} metadata of HyperVReplicaAzureEnableProtectionInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HyperVReplicaAzure',
      type: {
        name: 'Composite',
        className: 'HyperVReplicaAzureEnableProtectionInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            type: {
              name: 'String'
            }
          },
          hvHostVmId: {
            required: false,
            serializedName: 'hvHostVmId',
            type: {
              name: 'String'
            }
          },
          vmName: {
            required: false,
            serializedName: 'vmName',
            type: {
              name: 'String'
            }
          },
          osType: {
            required: false,
            serializedName: 'osType',
            type: {
              name: 'String'
            }
          },
          vhdId: {
            required: false,
            serializedName: 'vhdId',
            type: {
              name: 'String'
            }
          },
          targetStorageAccountId: {
            required: false,
            serializedName: 'targetStorageAccountId',
            type: {
              name: 'String'
            }
          },
          targetAzureNetworkId: {
            required: false,
            serializedName: 'targetAzureNetworkId',
            type: {
              name: 'String'
            }
          },
          targetAzureSubnetId: {
            required: false,
            serializedName: 'targetAzureSubnetId',
            type: {
              name: 'String'
            }
          },
          enableRDPOnTargetOption: {
            required: false,
            serializedName: 'enableRDPOnTargetOption',
            type: {
              name: 'String'
            }
          },
          targetAzureVmName: {
            required: false,
            serializedName: 'targetAzureVmName',
            type: {
              name: 'String'
            }
          },
          logStorageAccountId: {
            required: false,
            serializedName: 'logStorageAccountId',
            type: {
              name: 'String'
            }
          },
          disksToInclude: {
            required: false,
            serializedName: 'disksToInclude',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          targetAzureV1ResourceGroupId: {
            required: false,
            serializedName: 'targetAzureV1ResourceGroupId',
            type: {
              name: 'String'
            }
          },
          targetAzureV2ResourceGroupId: {
            required: false,
            serializedName: 'targetAzureV2ResourceGroupId',
            type: {
              name: 'String'
            }
          },
          useManagedDisks: {
            required: false,
            serializedName: 'useManagedDisks',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = HyperVReplicaAzureEnableProtectionInput;