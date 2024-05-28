import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum BidStatus {
    PENDING = "pending",
    ACCEPTED = "accepted",
    DECLINED = "declined"
}

@Entity()
export class Bid {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "numeric", precision: 10, scale: 2 })
    bid_amount: string

    @Column({
        type: "enum",
        enum: BidStatus,
        default: BidStatus.PENDING
    })
    status: BidStatus

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: 'buyer_id' })
    buyer_id: User

}