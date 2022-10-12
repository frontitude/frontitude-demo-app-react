import React from "react";
import Select, { components } from "react-select";

const options = [
    { value: 'en', label: 'English', icon: '/assets/flags/us.svg' },
    { value: 'de', label: 'German', icon: '/assets/flags/de.svg' },
    { value: 'es', label: 'Spanish', icon: '/assets/flags/es.svg' }
]

const LabelWithIcon = ({ label, icon }) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", lineHeight: '14px', height: '20px' }}>
        <img
            src={icon}
            style={{ width: 14, marginRight: 6 }}
            alt={label}
        />
        {label}
    </div>
)

const Option = (props) => {
    const { data } = props
    const { label, icon } = data

    return (
        <components.Option {...props}>
            <LabelWithIcon label={label} icon={icon} />
        </components.Option>
    )
}

const SingleValue = (props) => {
    const { data } = props
    const { label, icon } = data

    return (
        <components.SingleValue {...props} className='language-dropdown-value-wrapper'>
            <LabelWithIcon label={label} icon={icon} />
            <img
                className='language-dropdown-arrow'
                src='/assets/dropdown-arrow.svg'
                style={{ marginLeft: 6 }}
                alt={label}
            />
        </components.SingleValue >
    )
}

export default function LanguageSelectDropdown() {
    return (
        <Select
            options={options}
            defaultValue={options[0]}
            isClearable={false}
            isSearchable={false}
            components={{
                Option,
                SingleValue
            }}
            styles={{
                control: provided => ({
                    ...provided,
                    boxShadow: 'none',
                    background: 'transparent',
                    border: 'none'
                }),
                singleValue: provided => ({
                    ...provided,
                    display: 'flex',
                    justifyContent: 'center'
                }),
                dropdownIndicator: provided => ({
                    ...provided,
                    display: 'none'
                }),
                indicatorSeparator: provided => ({
                    ...provided,
                    display: 'none'
                })
            }}
        />
    );
}