import PropTypes from 'prop-types';
import { getRandomHexColor } from '../utils/getRandomHexColor';

import css from './Statistics.module.css';

export const Statistic = ({ title, stats }) => {
  return (
    <section className={css.container}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            className={css.item}
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
        {/* <li className={css.item}>
          <span className={css.label}>.docx</span>
          <span className={css.percentage}>4%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>.mp3</span>
          <span className={css.percentage}>14%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>.pdf</span>
          <span className={css.percentage}>41%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>.mp4</span>
          <span className={css.percentage}>12%</span>
        </li> */}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
