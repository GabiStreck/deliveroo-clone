export const deliveryArriveIn = ({ timestamp, offset = 10 }) => {
    if (!timestamp) return;
    let diff = Math.ceil(Math.abs(new Date(timestamp * 1000) - new Date()) / (1000 * 60))
    return `${diff.toString().replace(/.$/, "0")} - ${(diff + offset).toString().replace(/.$/, "0")} `
}