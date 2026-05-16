export function getWhatsAppLink(number, message) {
  if (!number) return "";
  const cleanNumber = number.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(message || "Hi Patricia, I viewed your portfolio and would like to connect.");
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}
