function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  if (n < 0) {
    return 'Input tidak valid. Angka harus non-negatif.';
  }
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
