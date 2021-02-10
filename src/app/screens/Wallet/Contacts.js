import React, { useEffect, useState, useRef, memo} from "react";
import {
  TouchableOpacity,
  View,
  Modal,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { AntDesign, SearchIcon } from "@expo/vector-icons";

import useUser from '../../../user/useUser';

function getUserContacts(user) {
  // API call to get the list of contact data
  return new Promise(resolve => resolve([]));
}

function getUserFavorites(user) {
  // API call to get the list of user favorite contacts
  return new Promise(resolve => resolve([]));
}

function handleAddContact(contactID, isFavorite) {
  // API call
}

const AddContactModal = ({isVisible, onDismiss, submitContact}) => {
  const [contactID, setContactID] = useState("");

  function handleSubmit() {
    submitContact(contactID)
    onDismiss()
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onDismiss={onDismiss}
    >
      <TextInput
        value={contactID}
        onChangeText={(text) => setContactID(text)}
        placeholder="Input contact's ID here"
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>
          Add Contact
        </Text>
      </TouchableOpacity>
    </Modal>
  )
}

const ContactCard = ({contact}) => {
  const {userName} = contact
  return (
    <View style={style.contact}>
      <Text style={style.contactName}>
        {userName}
      </Text>
    </View>
  )
};

/** Renders the filtered contact list and its  */
const ContactList = ({contacts, title, onContactAdd}) => {
  const [filterText, setFilterText] = useState("");
  const filteredContacts = filterText === ""
    ? contacts
    : contacts.filter((contact) => contact.userName.includes(filterText));

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onContactAdd}>
          <AntDesign name="adduser" size={26} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <AntDesign name="search1" size={18} color="black" />
        <TextInput
          value={filterText}
          onChangeText={(nextFilterText) => setFilterText(nextFilterText)}
          placeholder="Search your contacts..."
        />
      </View>
      <View>
        {filteredContacts === null ? undefined : filteredContacts.map((contact) => (
          <ContactCard contact={contact} />
        ))}
      </View>
    </View>
  )
};

const Contacts = () => {
  const user = useUser()
  const [contacts, setContacts] = useState(null);
  // OR favorites = contacts.filter(contact => contact.isFavorite) and delete the effect
  const [favorites, setFavorites] = useState(null);

  // null, "contact", or "favorite"
  const [addingContact, setAddingContact] = useState(null)

  useEffect(() => {
    getUserContacts(user).then((contacts) => {
      setContacts(contacts)
    })
  }, [user]);

  useEffect(() => {
    getUserFavorites(user).then((contacts) => {
      setFavorites(contacts)
    })
  }, [user]);

  const isAddContactModalOpen = addingContact !== null;

  return (
    <View style={styles.container}>
      <AddContactModal
        isVisible={isAddContactModalOpen}
        onDismiss={() => setAddingContact(null)}
        submitContact={(contactID) => handleAddContact(contactID, addingContact === "favorite")}
      />
      <ContactList
        contacts={contacts}
        title="My contacts"
        onContactAdd={() => setAddingContact("contact")}
      />
      <ContactList
        contacts={favorites}
        title="Favorites"
        onContactAdd={() => setAddingContact("favorite")}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 0,
    paddingLeft: 4,
    paddingRight: 4,
  },
  title: {
    fontSize: 26,
    color: "black",
  },
  row: {
    flexDirection: 'row',
  },
  contact: {
    width: "100%",
  },
  contactName: {
    flex: 1,
    fontSize: 16,
    color: "black",
  }
})

export default Contacts;
