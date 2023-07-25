import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("XtYbnMm");
const characterSorter = new Sorter(charactersCollection);
characterSorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(60);
linkedList.add(-400);
linkedList.add(4470);
linkedList.add(0);
const listSorter = new Sorter(linkedList);
listSorter.sort();
linkedList.print();
