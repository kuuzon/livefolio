import styles from './HeroBox.module.scss'
import AbpButton from './AbpButton';
import useTheme from '@/hooks/useTheme';

const HeroBox = ({ children, values: { title, content, path } }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.banner} ${styles[theme]}`}>
      <h1>{title}</h1>
      <p>{content}</p>
      <AbpButton path={path}>
        {children}
      </AbpButton>
    </div>
  );
};

export default HeroBox