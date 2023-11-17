import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header() {
    return <header className={cx('wrapper')}></header>;
    // return <h2>Sidebar</h2>;
}

export default Header;
