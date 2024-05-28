import { IsDecimal, IsString } from "class-validator"

export class CreateBidDto {

    @IsString()
    offer_id: string

    @IsString()
    user_id: string //TO-Do: this will be sent through cookies

    @IsDecimal({ decimal_digits: '2,2' },
        { message: 'bid_amount must be a decimal number with exactly 2 digits after the decimal point' })
    bid_amount: string
}
