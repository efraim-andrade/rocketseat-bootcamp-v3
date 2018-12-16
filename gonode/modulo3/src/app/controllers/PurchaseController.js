const Ad = require('../models/Ad')
const User = require('../models/Users')
const Purchase = require('../models/Purchase')

const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    await Purchase.create({ ...req.body, purchasedBy: req.userId })

    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    return res.json({ success: 'concluido com sucesso' })
  }

  async update (req, res) {
    const { ad } = req.body

    const purchaseItem = await Ad.findById(ad)

    if (await purchaseItem.purchasedBy !== undefined) {
      return res.status(401).json({
        error: 'Produto nao disponivel'
      })
    }

    await purchaseItem.update({ purchasedBy: req.userId })

    const purchase = await Purchase.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('ad')

    return res.json(purchase)
  }
}

module.exports = new PurchaseController()
