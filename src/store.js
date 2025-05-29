export const initialStore=()=>{
  return{
    contactos: [
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_contactos':
      const listado = action.payload;
      return {
        ...store,
        contactos: listado.contactos
      };

    case 'add_contacto':
      console.log(store);
      return {
        ...store,
        contactos: [...store.contactos, action.payload]
      };

      case 'remove_contacto':
        console.log('id contacto ' + action.payload.id);
      return {
        ...store,
        contactos: store.contactos.filter(con => con.id !== action.payload.id)
      };

    default:
      throw new Error('Unknown action.');
  }   
}
