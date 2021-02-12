import { useEffect, useRef, useState } from "react";

export default function SelectAllNone() {
  const options = ['Apples', 'Bananas', 'Carrots'];
  const initialSelectionModel = new Map<String, Boolean>();
  for (const o of options) {
    initialSelectionModel.set(o, false);
  }

  let [selectAllChecked, setSelectAllChecked] = useState(false);
  let [selectAllIndeterminate, setSelectAllIndeterminate] = useState(false);
  let [selectionModel, setSelectionModel] = useState(initialSelectionModel);
  const selectAllRef = useRef(null);

  useEffect(() => {
    (selectAllRef.current! as HTMLInputElement).indeterminate = selectAllIndeterminate;
  }, [selectAllIndeterminate])

  function toggle(option: string) {
    const newSelectionModel = new Map(selectionModel);
    newSelectionModel.set(option, !selectionModel.get(option));
    setSelectionModel(newSelectionModel);

    let hasFalse = false;
    let hasTrue = false;
    newSelectionModel.forEach((_, o) => {
      if (!newSelectionModel.get(o)) hasFalse = true;
      if (newSelectionModel.get(o)) hasTrue = true;
    })

    if (hasFalse && hasTrue) {
      setSelectAllIndeterminate(true);
    } else {
      setSelectAllIndeterminate(false);
      setSelectAllChecked(hasTrue);
    }
  }

  function toggleSelectAll() {
    const newSelectAllChecked = !selectAllChecked;
    const newSelectionModel = new Map(selectionModel);
    newSelectionModel.forEach((_, o) => {
      newSelectionModel.set(o, newSelectAllChecked);
    });
    setSelectionModel(newSelectionModel);
    setSelectAllChecked(newSelectAllChecked);
    setSelectAllIndeterminate(false);
  }

  return (<>
    <label key="selectAll">
      <input
        type="checkbox"
        checked={selectAllChecked}
        ref={selectAllRef}
        onChange={() => toggleSelectAll()}></input>
      &nbsp;Select all
    </label>
    <br />
    {options.map((option) => {
      return (<div key={option}>
        <label>
          <input
            type="checkbox"
            checked={!!selectionModel.get(option)}
            onChange={() => toggle(option)}></input>
          &nbsp;{option}
        </label>
      </div>);
    })}
  </>);
}