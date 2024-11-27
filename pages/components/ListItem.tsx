// components/ListItem.js o ListItem.tsx si usas TypeScript
import styles from '../styles/ListItem.module.css';  // Estilos específicos para ListItem

interface Item {
  nombre: string;
  compra: number;
  venta: number;
}

function ListItem({ item }: { item: Item }) {
  return (
    <div className={styles.listItem}>
      <span className={styles.key}>{item.nombre}</span>
      <div className={styles.box}>
        <span>Compra: ${item.compra.toFixed(2)}</span>
        <span>Venta: ${item.venta.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default ListItem;