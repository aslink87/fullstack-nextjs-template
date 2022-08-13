import styles from './Navigation.module.scss'
export interface INavigationTemplate {
  sampleTextProp: string;
}

const Navigation: React.FC<INavigationTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default Navigation;
