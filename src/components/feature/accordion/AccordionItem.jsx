import { IoIosArrowDown } from "react-icons/io";

import styles from './AccordionItem.module.scss';
import useTheme from '@/hooks/useTheme';
import AbpButton from "@/components/common/AbpButton";

function AccordionItem({ title, children, isActive, onShow }) {
  const { theme } = useTheme(); 

  return (
    <section className={`${isActive ? styles.activeBox : styles.accordionBox} ${styles[theme]}`}>
      <h3>{title}</h3>
      { isActive ? (
        <p>{children}</p>
      ) : (
        <AbpButton onClick={onShow}>
          <IoIosArrowDown />
        </AbpButton>
      )}
    </section>
  )
}

export default AccordionItem