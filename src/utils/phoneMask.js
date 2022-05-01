export function phoneMask(phone) {
  if(phone === "") return;
    var masked = phone?.replace(/\D/g, "");
    masked = masked?.replace(/^0/, "");
    if (masked.length > 10) {
      masked = masked?.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (masked.length > 5) {
      masked = masked?.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (masked.length > 2) {
      masked = masked?.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      masked = masked?.replace(/^(\d*)/, "($1");
    }
    return masked;
  }
