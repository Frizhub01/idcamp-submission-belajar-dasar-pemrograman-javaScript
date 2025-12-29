function fibonacci(n) {
  if (n < 0) {
    return 'Input tidak valid. Angka harus non-negatif.';
  }

  if (n === 0) {
    return [0];
  }

  if (n === 1) {
    return [0, 1];
  }

  const prevSequence = fibonacci(n - 1);

  const nextElement = prevSequence[prevSequence.length - 1] + prevSequence[prevSequence.length - 2];
  return [...prevSequence, nextElement];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
