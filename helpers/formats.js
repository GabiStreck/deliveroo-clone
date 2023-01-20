export const currencyFormat = (price) => {
    return price.toFixed(2).toLocaleString("en-US",
        { style: "currency", currency: "USD" }
    );
}