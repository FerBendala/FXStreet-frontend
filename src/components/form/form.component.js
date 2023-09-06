import { useState } from 'react'
import styles from './form.module.scss'

const Form = ( { items } ) => {
    const [selectedItem, setSelectedItem] = useState( null )

    const handleRadioChange = ( index ) => setSelectedItem( index )
    const handleSubmit = ( event ) => event.preventDefault()

    return (
        <form
            className={styles['form']}
            onSubmit={handleSubmit}
        >
            {items.map( ( item, index ) => (
                <label
                    key={index}
                    className={styles['form__label']}
                >
                    <input
                        type="radio"
                        name="dropdown-radio"
                        className={styles['form__label__radio']}
                        onChange={() => handleRadioChange( index )}
                    />
                    <span className={styles['form__label__text']}>
                        {item.text}
                    </span>
                </label>
            ) )}

            <button
                type='submit'
                className={styles['form__button']}
                disabled={selectedItem === null}
            >
                <span className={styles['form__button__text']}>Hide content</span>
            </button>
        </form>
    )
}

export default Form