import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'db84035330a3457c9d9ab3fa9930e48d'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '14fae2d182ba48c8ad255989f2e84ba3'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '023203eaac7f4d8eafa333a952d3beb9'
                        key: {
                            name: 'x_society_service_request'
                            element: 'booking_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '041086a512444dcf8bf355a2fe5a6f0d'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'remarks'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0529f4e189344e258b2e17cbe23323ea'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'visitor_name'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '06b9b7dc8eac401a89b2db7d0c19f104'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'id_proof_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07ed7cafac3a469485fdb490e65aaaf5'
                        key: {
                            name: 'x_society_service_request'
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0b4da9b02fdb4088a3ee1eb923bcf5bc'
                        key: {
                            name: 'x_society_service_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0c9f89c0315b42f4941e57d5a715ca0c'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'id_proof_type'
                            value: 'pan'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e23584968a44331b307a5331e0b92d6'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f88ef9a5a934f119ac0756b2d7eb0b9'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'status'
                            value: 'overdue'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '11bf458bd785493da4eb32bce628d970'
                        key: {
                            name: 'x_society_service_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1352f848350c466d80fd34cba64ffd7c'
                        key: {
                            name: 'x_society_service_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '15048079438d47af84210911caf8cf3b'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '15c1da3f03664c0bb65ddb63967a5293'
                        key: {
                            name: 'x_society_flat'
                            element: 'tenant_phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1698b0a189c84a30a1b77d9a405b17db'
                        key: {
                            name: 'x_society_flat'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '16dfc75f329d416b9333837d975f1622'
                        key: {
                            name: 'x_society_service_request'
                            element: 'priority'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '186c4ebd2cc8420fb4ad2141890bfe2f'
                        key: {
                            name: 'x_society_service_request'
                            element: 'charges'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '189477e91543467e95332f4e47645eae'
                        key: {
                            name: 'x_society_flat'
                            element: 'flat_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1dc15ae2c46144649305ea5e4b876276'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'entry_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1e16ca09df604657b4c062ba73eb889c'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'id_proof_type'
                            value: 'aadhaar'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1eab6c577adf4465877bd975fa5ea1a6'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'id_proof_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2032b5fd2cae4aa69c1e73055f79bf38'
                        key: {
                            name: 'x_society_service_request'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '204c42301aae4d60a58a996f93fe06d9'
                        key: {
                            name: 'x_society_service_request'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '20ff07f8923d4251bc5b85ccdb1fb512'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '22c8b1c9edb149acba4047fca0a1b016'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'amount'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '23e94ef805bd40bfb31bee13adda530f'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'payment_mode'
                            value: 'cash'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '24b62570d570485f931e83a69c03cc0d'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'month_year'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2576afb40c5e45639795c6cc180c16c2'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'remarks'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '25b5f04fe2c34e6a845144485ace0d34'
                        key: {
                            name: 'x_society_service_request'
                            element: 'flat'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '25f5468359eb46d8a89a7cf26ff5dd8a'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'purpose'
                            value: 'guest'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29360611e15b4adca78114007101021b'
                        key: {
                            name: 'x_society_service_request'
                            element: 'pinned'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2963c247fab04fc3a4f9f9a1621d7d40'
                        key: {
                            name: 'x_society_service_request'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a3dfd609a8e4373b95355105d49a00b'
                        key: {
                            name: 'x_society_service_request'
                            element: 'start_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2cb18172ae8f4de0a0662e3d8b440d84'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d6f8626dd0d47e9929b1bc2c42e4cba'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'payment_mode'
                            value: 'upi'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2e493ee531174c96857f35b8499597b1'
                        key: {
                            name: 'x_society_service_request'
                            element: 'category'
                            value: 'cleaning'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2fc13b7ba3924eafba82fdb27bcd4c06'
                        key: {
                            name: 'x_society_service_request'
                            element: 'facility'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '312a213aa6c04495a5b5583608aab981'
                        key: {
                            name: 'x_society_flat'
                            element: 'parking_slot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '350ee7d1af5c4deab4c75e96b93446c7'
                        key: {
                            name: 'x_society_service_request'
                            element: 'resolved_on'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '35fdee6966b843c0bad2ce18c8052b1d'
                        key: {
                            name: 'x_society_flat'
                            element: 'parking_slot'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3893c790da4c4401a02ae603b228a36e'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'entry_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '39f74803c94a441fa47d27d0987c8e6b'
                        key: {
                            name: 'x_society_flat'
                            element: 'occupancy_status'
                            value: 'vacant'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3aaa2174f4d344249b6857a08eb9e17a'
                        key: {
                            name: 'x_society_service_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ac66be443eb43fdb55f57625ca6d92a'
                        key: {
                            name: 'x_society_flat'
                            element: 'owner_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3af816d74c264374a7a6864446cb1565'
                        key: {
                            name: 'x_society_flat'
                            element: 'flat_type'
                            value: '2bhk'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '424e21b762ca4cc29e35696b0584ce95'
                        key: {
                            name: 'x_society_service_request'
                            element: 'booking_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '425a66d0210d45688f0d0f4e37c0bbba'
                        key: {
                            name: 'x_society_flat'
                            element: 'floor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4309e474eecf4978b5240e0b482c4c35'
                        key: {
                            name: 'x_society_maintenance_bill'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '443114bc571c47d09bc0488d342f09bb'
                        key: {
                            name: 'x_society_service_request'
                            element: 'expires_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '448e529fdf6940919aab52de8a36d8ae'
                        key: {
                            name: 'x_society_flat'
                            element: 'occupancy_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '44ea4a42add5466da9a365f310f75075'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'id_proof_type'
                            value: 'voter_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '450cda46a1cf46549f12e3e2ac1600f9'
                        key: {
                            name: 'x_society_service_request'
                            element: 'facility'
                            value: 'gym'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '450d8f7d27a043279e84c7cf9bf2251f'
                        key: {
                            name: 'x_society_service_request'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4611311d433a4ac8a4efffb9ce27af40'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'payment_mode'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '465f4ba9f5bd47249241c5b39fbe63c8'
                        key: {
                            name: 'x_society_service_request'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '46fda976f2ec46fba84c22c79208cd56'
                        key: {
                            name: 'x_society_maintenance_bill'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '475f06e25a944ddaa30f85a0fc297fa8'
                        key: {
                            name: 'x_society_flat'
                            element: 'tenant_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4945bc704eb44ed682b78ef1473128c9'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'month_year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a1210c5eeab46039aebd93abc0e1740'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'check_in'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4afef876cc8d40aa980d07e399309ddb'
                        key: {
                            name: 'x_society_flat'
                            element: 'flat_type'
                            value: '1bhk'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b94929e393442b0a9cd7e63a0fff427'
                        key: {
                            name: 'x_society_flat'
                            element: 'occupancy_status'
                            value: 'tenant_occupied'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4c35f45c6942431095b0261aa3e868b9'
                        key: {
                            name: 'x_society_service_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f1bca6d54c748b396312ffe99b7123f'
                        key: {
                            name: 'x_society_service_request'
                            element: 'priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f26e3f259f74191b6c625a1a7a4d615'
                        key: {
                            name: 'x_society_flat'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '51a0e8d4a59a469b86bfa822f7203490'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'payment_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '526ce50296b244bca669b95285f5116d'
                        key: {
                            name: 'x_society_service_request'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '538b765e997a42e7893da7d8111e6f9d'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'flat'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56ec69448a7a49859cb5a18b361f1e9c'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'payment_mode'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '58f14fdf184049caa96717e17e6c44dd'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'payment_mode'
                            value: 'cheque'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c8900cb42d348a7b5f097cfec0b084a'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'check_out'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e680e9ffc8c4c689a349310138dcca3'
                        key: {
                            name: 'x_society_flat'
                            element: 'flat_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5f1b5d57dce54a6b877115b8d34f5225'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'visitor_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5fecd0652d5346f6a2233c953374f7e5'
                        key: {
                            name: 'x_society_flat'
                            element: 'floor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ff0e9e81b05472997c12284501b1d25'
                        key: {
                            name: 'x_society_flat'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ff5b9c853c1483183848b97de5c1042'
                        key: {
                            name: 'x_society_service_request'
                            element: 'request_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6421ae239bc94c2cb02b942552463aa2'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'purpose'
                            value: 'cab'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '65517188e79c48c9978395875d8a0876'
                        key: {
                            name: 'x_society_service_request'
                            element: 'request_type'
                            value: 'complaint'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '664a0dfd4fb6482698782711fd76fc58'
                        key: {
                            name: 'x_society_service_request'
                            element: 'resolution_notes'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6736c24ff6514e6795d4fe0a24556098'
                        key: {
                            name: 'x_society_service_request'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '681a5fb32b96489c960f12135c3c981c'
                        key: {
                            name: 'x_society_service_request'
                            element: 'vendor_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '688af885fc064f12a4677230384c9984'
                        key: {
                            name: 'x_society_service_request'
                            element: 'category'
                            value: 'security'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '68fb0227799a44d2b111356bff572587'
                        key: {
                            name: 'x_society_flat'
                            element: 'owner_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '693057a9112a4801b75f0ec679c2a1f8'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '694b7da133ae49009eedaa6b4b77c2af'
                        key: {
                            name: 'x_society_service_request'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6b3319c705c64419aa44ebabf4051d79'
                        key: {
                            name: 'x_society_flat'
                            element: 'flat_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6ecef327e29a413ab90074e435ee91c9'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'purpose'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6f4c4bf380b34025b9af2af13b9a0047'
                        key: {
                            name: 'x_society_service_request'
                            element: 'end_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7016a1d17ecc4fae8318cbba1546af1f'
                        key: {
                            name: 'x_society_service_request'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7060a0e54c5c413e8f7370fd9b1ec033'
                        key: {
                            name: 'x_society_service_request'
                            element: 'opened_on'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '70d4f28f8af6425486addb6e8147ab67'
                        key: {
                            name: 'x_society_service_request'
                            element: 'priority'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '71951606130b4404813fe457bdcf2748'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7260e457eb5a4d4cb6bc23da43f04de1'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'visitor_vehicle'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '76d398e99b504189b8bb1afa1f73f67d'
                        key: {
                            name: 'x_society_service_request'
                            element: 'status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7864beab87db41e8b619a7e4b940c6d6'
                        key: {
                            name: 'x_society_flat'
                            element: 'occupancy_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7c9837b93c044d92a24890e063b6fd53'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'flat'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7fd7ae8bc4a34f18a18a57099e97dd01'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'id_proof_type'
                            value: 'driving_license'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '804b1aa6ce2544c9934e655a48693c4e'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'visitor_vehicle'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8188a0ef010a4d34ade6de9dca9bb273'
                        key: {
                            name: 'x_society_flat'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '841cd79f406f45e1badc2238bd0982ee'
                        key: {
                            name: 'x_society_service_request'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8860bbc924e44ca88da3e96889549689'
                        key: {
                            name: 'x_society_flat'
                            element: 'occupancy_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '88774facd401406a8af39321aff6b334'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'id_proof_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '88d9d70f1c6844ad8ae0334055a80bdf'
                        key: {
                            name: 'x_society_flat'
                            element: 'owner_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8a18b9858aa94095a99528241cffe668'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'payment_mode'
                            value: 'bank_transfer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ac4382280674b9e8b55e67ae0bc5bee'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8ac62628ba6145d988365acd050a973a'
                        key: {
                            name: 'x_society_flat'
                            element: 'flat_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8fd18ba51fff45daa30c0fa878a3269a'
                        key: {
                            name: 'x_society_service_request'
                            element: 'priority'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '92abd5f92af341a6b4efb1a49cb9de42'
                        key: {
                            name: 'x_society_service_request'
                            element: 'facility'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '949b3d97f7ab47cc9364ab02ff4d6b96'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'payment_mode'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '94e9e8a7f5aa48dca16ced293c0b98ca'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'status'
                            value: 'paid'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '972dfbd4a58e4addb9ac78cb85121cc3'
                        key: {
                            name: 'x_society_service_request'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9838910b1223471e943d4fb6d1b7e915'
                        key: {
                            name: 'x_society_service_request'
                            element: 'category'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a0f191ca3da4db285679a57d480c13e'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'purpose'
                            value: 'service'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9b41278b1c454b5ebbe2b5978ced2a2a'
                        key: {
                            name: 'x_society_flat'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9c92aca16317488d969bfa836af038bb'
                        key: {
                            name: 'x_society_service_request'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d884b64048f4daca01bf57bc6836908'
                        key: {
                            name: 'x_society_flat'
                            element: 'owner_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f10d1d8999b4cc8a707a34e1fe3c93c'
                        key: {
                            name: 'x_society_flat'
                            element: 'flat_number'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9f73f2a74c7e470c9746d675974ae54b'
                        key: {
                            name: 'x_society_service_request'
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f8e3508650d4d36ad274f89d18edad5'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'flat'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a0577d71042f4e3c89017dd13e9efafe'
                        key: {
                            name: 'x_society_service_request'
                            element: 'status'
                            value: 'requested'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0d95ecb99d145e3a92216398669f07a'
                        key: {
                            name: 'x_society_flat'
                            element: 'tenant_name'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'a200fa8b1c1549debb880a7d3f0c19e6'
                        key: {
                            category: 'x_society_service_request'
                            prefix: 'SR'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3ce53fbbc5e427c9622ff14837a7a64'
                        key: {
                            name: 'x_society_service_request'
                            element: 'flat'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a49bfe6b6402416bb2d0eb9a1d24bb72'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'flat'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a512e33434424e5d968d0ee78a8277e4'
                        key: {
                            name: 'x_society_service_request'
                            element: 'status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a873a28d2e034371984ba84137659287'
                        key: {
                            name: 'x_society_service_request'
                            element: 'request_type'
                            value: 'notice'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa993cbce0874180885b0760248faaab'
                        key: {
                            name: 'x_society_service_request'
                            element: 'expires_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac1ecfa1b8674ebab177a29ff4286f1a'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'check_out'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'acd6b13c3cea4f0bbf278c4efe6d416f'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'check_in'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aeeec8e885d8441ab25d10588bc63f07'
                        key: {
                            name: 'x_society_service_request'
                            element: 'category'
                            value: 'electrical'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af6275e964664d798218999d242b621e'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b1169f6db171463382eb9a1b96751bb5'
                        key: {
                            name: 'x_society_flat'
                            element: 'flat_type'
                            value: '3bhk'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2bdf0c3a5684a7f84306e24d47eff78'
                        key: {
                            name: 'x_society_flat'
                            element: 'area_sqft'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2c8a161a0c54111ae8330e1bc346d98'
                        key: {
                            name: 'x_society_flat'
                            element: 'area_sqft'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b313e835f06644e5b237e22e7701d393'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b3bcbe717f6144b7bf8f4ea4d2c08c20'
                        key: {
                            name: 'x_society_service_request'
                            element: 'resolution_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b7cdac470fef4dd3a9dbedcc2d5accc1'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bae707cb316b43af9e097e451b400256'
                        key: {
                            name: 'x_society_service_request'
                            element: 'status'
                            value: 'confirmed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bb8532ca8be2457bb4c54bd159ff2324'
                        key: {
                            name: 'x_society_service_request'
                            element: 'facility'
                            value: 'clubhouse'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bc36e5b2a6e64c098d07961fb0e56e17'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'status'
                            value: 'unpaid'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'bc73534a34dc40cf9da96bb3c99778ab'
                        key: {
                            category: 'x_society_maintenance_bill'
                            prefix: 'BILL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd618935bfb949f48587127a43acfb26'
                        key: {
                            name: 'x_society_service_request'
                            element: 'category'
                            value: 'lift'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bdacfd580de5430dad987d3dcff2b4f3'
                        key: {
                            name: 'x_society_service_request'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'be3b2b569ba24b25a26f7fea1bd6773d'
                        key: {
                            name: 'x_society_service_request'
                            element: 'facility'
                            value: 'community_hall'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bfc1513452184477a9804285a22b38a1'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c671edea2785461f8a8a90d6365b6776'
                        key: {
                            name: 'x_society_flat'
                            element: 'flat_type'
                            value: '4bhk'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc072de568a74b52862d3db6c64a41a7'
                        key: {
                            name: 'x_society_service_request'
                            element: 'charges'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cef73a90b23e416589e91d7f4ae577cd'
                        key: {
                            name: 'x_society_flat'
                            element: 'owner_email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cffe583ca1704f01ba229a42f91804ab'
                        key: {
                            name: 'x_society_service_request'
                            element: 'opened_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd007ab2548124d3d871a601644add74a'
                        key: {
                            name: 'x_society_flat'
                            element: 'block'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd0314d84be7547b7bac42ca7a62f937f'
                        key: {
                            name: 'x_society_service_request'
                            element: 'status'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd1a9cb81dfee4ebfb11b300b45571770'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'id_proof_type'
                            value: 'passport'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2031af817124d499a5f9d94e7876733'
                        key: {
                            name: 'x_society_service_request'
                            element: 'request_type'
                            value: 'facility_booking'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd3c32dd9ccda408ba5025c2337944b62'
                        key: {
                            name: 'x_society_service_request'
                            element: 'category'
                            value: 'plumbing'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd40e319fd0f14ec2b830af469d127553'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd81cb8064fdb48ec98ba9197b1153b71'
                        key: {
                            name: 'x_society_service_request'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd86b0c35c31d47c392322a8828ced851'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'visitor_phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd8a2cc88b12846d0aeef714b43aaf02a'
                        key: {
                            name: 'x_society_service_request'
                            element: 'resolved_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9ed9691e61b4404bc276a3bae3dda16'
                        key: {
                            name: 'x_society_service_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dab13867f02841ea956bbeaf96e84f2e'
                        key: {
                            name: 'x_society_flat'
                            element: 'block'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ddf039e962b24b56a92ceedb5111abd2'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'visitor_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ddf5e3caa6ca439c83b694f71fe550fc'
                        key: {
                            name: 'x_society_flat'
                            element: 'owner_phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dfc27c1b79de4f899dac818ee7bce579'
                        key: {
                            name: 'x_society_service_request'
                            element: 'start_time'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e137123154d0447093932a2faa453f28'
                        key: {
                            name: 'x_society_service_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e4bc967ed50a4f429e84397686e60769'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e55c795b665c41c0bedf11668d9d208a'
                        key: {
                            name: 'x_society_service_request'
                            element: 'vendor_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e5dfba13e8a54187897188be6289b3cf'
                        key: {
                            name: 'x_society_visitor_log'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e690c181f4714844a2fe2c289de64e3a'
                        key: {
                            name: 'x_society_flat'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e6aad97bdd174209ba20037ac5daaa10'
                        key: {
                            name: 'x_society_service_request'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7eff9b57a8447d0b13de9c34f9fb33a'
                        key: {
                            name: 'x_society_service_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e93d5510a3ce4d7686b67ca45de9e4da'
                        key: {
                            name: 'x_society_visitor_log'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e941b44947f4438389f4eb052744c1db'
                        key: {
                            name: 'x_society_flat'
                            element: 'tenant_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e96ffb8846394e9bb4ea7d26f02fd465'
                        key: {
                            name: 'x_society_service_request'
                            element: 'end_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea09b4ea2868407e83d849af7d5c7925'
                        key: {
                            name: 'x_society_service_request'
                            element: 'pinned'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ea8b9de7fec840f99a52e4500b7233f1'
                        key: {
                            name: 'x_society_service_request'
                            element: 'facility'
                            value: 'swimming_pool'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee40b01ef01445c5a4f2ef9f44f3d3fc'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'payment_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f30d5a3cc75c41d1814031898cae649e'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f39adb553d0c43bc83d3b4a1f6f05f53'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'purpose'
                            value: 'delivery'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f3ec02a72ffd4004a7125a118262d640'
                        key: {
                            name: 'x_society_flat'
                            element: 'occupancy_status'
                            value: 'owner_occupied'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4e289771c05426385df015d6524664b'
                        key: {
                            name: 'x_society_service_request'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f742da3625104cd1a4adf66ee9c753bf'
                        key: {
                            name: 'x_society_maintenance_bill'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8c0cc44abc24cf3ad0c9895d483bea6'
                        key: {
                            name: 'x_society_visitor_log'
                            element: 'id_proof_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f8d0caf079a74540a7314aee78c128b0'
                        key: {
                            name: 'x_society_service_request'
                            element: 'facility'
                            value: 'terrace'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'fa983c793982445b855454a271f2a030'
                        key: {
                            category: 'x_society_visitor_log'
                            prefix: 'VL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb45e7b9a6c8444ea53ab912216c8d5e'
                        key: {
                            name: 'x_society_service_request'
                            element: 'facility'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ffff602e4780420e94cf2dcf3ab3ebf8'
                        key: {
                            name: 'x_society_service_request'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
