import { Bid } from "src/bids/entities/bid.entity"
import { Offer } from "src/offers/entities/offer.entity"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export enum UserType {
    BUYER = "buyer",
    SELLER = "seller"
}

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", length: 50, unique: true })
    username: string

    @Column({ type: "varchar", length: 255 })
    password: string

    @Column({
        type: "enum",
        enum: UserType,
        default: UserType.BUYER
    })
    user_type: UserType

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Offer, offer => offer.user_id) //TO-DO: alter user_id at Offer entity to be seller_id
    user_offers: Offer[]

    @OneToMany(() => Bid, bid => bid.user)
    user_bids: Bid[]
}