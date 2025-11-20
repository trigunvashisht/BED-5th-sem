// Minimal controller while OrderBook internals are worked on.
// This echoes the received order and returns a 200 OK so the route can be tested.
module.exports.postPlaceOrder = async (req, res) => {
    try {
        const { type, side, price, quantity, username, symbol } = req.body;
        console.log("Received order:", req.body);
        return res.status(200).json({ ok: true, received: { type, side, price, quantity, username, symbol } });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ ok: false, error: "internal server error"});
}
};