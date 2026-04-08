import { ApplicationMenu, Record } from '@servicenow/sdk/core';

export const societyAppMenu = ApplicationMenu({
    $id: Now.ID['society_app_menu'],
    title: 'Society Management',
    active: true,
    order: 100,
    hint: 'Manage your residential society — flats, bills, requests, and visitors',
});

export const flatModule = Record({
    $id: Now.ID['society_flat_module'],
    table: 'sys_app_module',
    data: {
        application: societyAppMenu,
        title: 'Flats',
        name: 'x_society_flat',
        link_type: 'LIST',
        active: true,
        order: 100,
        hint: 'View and manage all flats in the society',
    },
});

export const maintenanceBillModule = Record({
    $id: Now.ID['society_maintenance_bill_module'],
    table: 'sys_app_module',
    data: {
        application: societyAppMenu,
        title: 'Maintenance Bills',
        name: 'x_society_maintenance_bill',
        link_type: 'LIST',
        active: true,
        order: 200,
        hint: 'View and manage maintenance bills',
    },
});

export const serviceRequestModule = Record({
    $id: Now.ID['society_service_request_module'],
    table: 'sys_app_module',
    data: {
        application: societyAppMenu,
        title: 'Service Requests',
        name: 'x_society_service_request',
        link_type: 'LIST',
        active: true,
        order: 300,
        hint: 'View and manage resident service requests',
    },
});

export const visitorLogModule = Record({
    $id: Now.ID['society_visitor_log_module'],
    table: 'sys_app_module',
    data: {
        application: societyAppMenu,
        title: 'Visitor Log',
        name: 'x_society_visitor_log',
        link_type: 'LIST',
        active: true,
        order: 400,
        hint: 'View and manage visitor entry logs',
    },
});
