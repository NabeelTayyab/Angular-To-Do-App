import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs'; // Reactive extensions for javascript
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDocument: AngularFirestoreDocument<Item>;
  date;

  constructor(private db: AngularFirestore) { 
    this.items = this.db.collection('To Do List').valueChanges();
    this.itemsCollection = this.db.collection('To Do List');
    this.date = new Date();
  }

  AddList(task, category, priority) {
    const documentId = this.db.createId();
    
    this.itemsCollection.doc(documentId).set({
      taskname: task,
      category: category,
      priority: priority,
      id: documentId,
      date: this.date,
      taskstatus: false
    });
  }
  changeStatus(checkbox:Item){
      checkbox.taskstatus = !checkbox.taskstatus;
      this.itemDocument = this.db.doc(`To Do List/${checkbox.id}`);
      this.itemDocument.update(checkbox);
  }
  editList(itemEdit:Item,taskname,category,priority){
    itemEdit.taskname = taskname;
    itemEdit.category = category;
    itemEdit.priority = priority;
    this.itemDocument = this.db.doc(`To Do List/${itemEdit.id}`);
    this.itemDocument.update(itemEdit);
  }

  deleteItem(item: Item) {
    this.itemDocument = this.db.doc(`To Do List/${item.id}`);
    this.itemDocument.delete();
  }
}
