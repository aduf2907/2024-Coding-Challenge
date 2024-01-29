function disemvowel(str) {
  return str.replace(/[aiaueo]/gi, ""); //g itu global jadi gak cuman buat index yg pertama kali ketemu aja dia ubahnya, tapi seterusnya juga. Klau i itu buat biar gak case-sensitive (jadi mau huruf kecil/gede ttp diapus huruf vocalnya)
}

console.log(disemvowel("This website is for losers LOL!"));
