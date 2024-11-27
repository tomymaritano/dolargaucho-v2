import { useUltimoRiesgoPais } from '../services/ultimoRiesgoPaisService';
import styles from '../../styles/Home.module.css';

export default function UltimoRiesgoPais() {
  const { riesgoPais, loading, error } = useUltimoRiesgoPais();

  const formatFecha = (fechaISO: string): string => {
    const fecha = new Date(fechaISO);
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = String(fecha.getFullYear());
    const hora = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${anio} a las ${hora}:${minutos}`;
  };

  if (loading) return <p className={styles.loading}>Cargando último riesgo país...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Último Riesgo País</h1>
      {riesgoPais && (
        <div className={styles.card}>
          <p className={styles.value}>
            <strong>Valor:</strong> {riesgoPais.valor}
          </p>
          <p className={styles.date}>
            <strong>Fecha:</strong> {formatFecha(riesgoPais.fecha)}
          </p>
        </div>
      )}
    </div>
  );
}