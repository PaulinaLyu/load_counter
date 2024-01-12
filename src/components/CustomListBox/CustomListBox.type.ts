export interface optionCustomListBox {
  id: string;
  name: string;
}

export interface CustomListBoxProps {
  options: optionCustomListBox[];
  selected: optionCustomListBox | null;
  setSelected: (value: any) => void;
}
