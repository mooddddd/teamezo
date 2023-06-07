import { Optional } from "sequelize"

export interface WalletAttributes {
    masterKey: string
    number_accounts: number
}

export type WalletCreateAttributes = Optional<WalletAttributes, 'masterKey'>