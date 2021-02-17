import { useState } from "react"

export default function Phone() {
  let [phone, setPhone] = useState('');

  function handlePhoneUpdate(val: string) {
    const d = val.replaceAll(/[^0-9]/g, '').replace(/^[0-1]*/, '');

    const l = d.length;

    let newPhone = '';

    if (l >= 7) {
      newPhone = `(${d.slice(0, 3)}) ${d.slice(3,6)}-${d.slice(6,10)}`;
    } else if (l >= 4) {
      newPhone = `(${d.slice(0, 3)}) ${d.slice(3,6)}`;
    } else if (l >= 1) {
      newPhone = `(${d.slice(0, 3)}`;
    }

    setPhone(newPhone);
  }

  return (<>
    <input
      className="text-black"
      type="text"
      value={phone}
      onChange={(e) => handlePhoneUpdate(e.target.value)} />
  </>)
}