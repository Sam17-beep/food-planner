export default class Article {
  _L1: string
  _L2: string
  bottom: number
  clean_image_url: string
  clipping_image_url: string
  current_price: number
  flyer_id: number
  flyer_item_id: string
  id: number
  indexed: boolean
  item_type: string
  item_weight: number
  left: number
  merchant_id: number
  merchant_logo: string
  merchant_name: string
  name: string
  original_price: number
  post_price_text: string
  pre_price_text: string
  premium: boolean
  right: number
  sale_story: any
  score: number
  top: number
  valid_from: string
  valid_to: string

  constructor(
    _L1: string,
    _L2: string,
    bottom: number,
    clean_image_url: string,
    clipping_image_url: string,
    current_price: number,
    flyer_id: number,
    flyer_item_id: string,
    id: number,
    indexed: boolean,
    item_type: string,
    item_weight: number,
    left: number,
    merchant_id: number,
    merchant_logo: string,
    merchant_name: string,
    name: string,
    original_price: number,
    post_price_text: string,
    pre_price_text: string,
    premium: boolean,
    right: number,
    sale_story: any,
    score: number,
    top: number,
    valid_from: string,
    valid_to: string
  ) {
    this._L1 = _L1
    this._L2 = _L2
    this.bottom = bottom
    this.clean_image_url = clean_image_url
    this.clipping_image_url = clipping_image_url
    this.current_price = current_price
    this.flyer_id = flyer_id
    this.flyer_item_id = flyer_item_id
    this.id = id
    this.indexed = indexed
    this.item_type = item_type
    this.item_weight = item_weight
    this.left = left
    this.merchant_id = merchant_id
    this.merchant_logo = merchant_logo
    this.merchant_name = merchant_name
    this.name = name
    this.original_price = original_price
    this.post_price_text = post_price_text
    this.pre_price_text = pre_price_text
    this.premium = premium
    this.right = right
    this.sale_story = sale_story
    this.score = score
    this.top = top
    this.valid_from = valid_from
    this.valid_to = valid_to
  }
}
