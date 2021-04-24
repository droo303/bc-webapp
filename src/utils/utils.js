export let shortifyAddress = (addr) => {
    return addr.substring(0, 5) + ".." + addr.substring(39, 42);
}
