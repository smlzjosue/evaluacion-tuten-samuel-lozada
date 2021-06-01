export interface LoginResponse {
    response: boolean;
    hasError: boolean;
    desc: string;
    code: string;
    executeDate: string;
    object: ObjectLoginResponse;
}

export interface ObjectLoginResponse {
    userName: string;
    alerts: any[];
    roles: Role [];
    accounts: any [];
    permissions: Permission[];
    sessionId: string;
}

export interface Role {
    roleId: string;
    name: string;
}

export interface Permission {
    id: string;
    name: string;
    enabled: string;
    module: string;
}

export class GetSubscriber {
    ban: string;
    productType: string;
    subscriberId: string;
    subscriberStatus: string;
    method = 'getSubscriber';
}

export class GetInstallments {
    appId: string;
    queryType: string;
    valueRequested: string;
    accountNumber: string;
    subscriberNumber: string;
    productType: string;
    userId: string;
    method: string;
}

export class GetPaymentOptions {
    appId: string;
    productId: string;
    merchantCodeId: string;
    method: string;
}

export class GetInitiatePaymentProcess {
    recieverAcctNumber: string;
    receiverSubsNumber: string;
    merchantCodeId: string;
    appId: string;
    productId: string;
    paymentOptionId: string;
    paymentAmount: string;
    customerEmail: string;
    subscriberNumber: string;
    subscriberAccountNumber: string;
    subscriberFullName: string;
    subscriberAddress1: string;
    subscriberAddress2: string;
    subscriberCity: string;
    subscriberState: string;
    subscriberZipCode: string;
    transactionDescription: string;
    locationId: string;
    invoiceNumber: string;
    installmentUnits: string;
    userId: string;
    method: string;
}

export class GetGenerate {
    transactionType: string;
    source: string;
    userId: string;
    accountNumber: string;
    accountType: string;
    accountSubType: string;
    subscriber: string;
    amount: string;
    email: string;
    referenceId: string;
    userNameAudit: string;
    method: string;
}

export class GetVerifyPaymentStatus {
    paymentToken: string;
    method: string;
}

