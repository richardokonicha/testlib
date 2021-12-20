import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../src/Button";
import { action } from "@storybook/addon-actions";


const meta: Meta = {
    title: "Button",
    component: Button,
    argTypes: {
        // onClick: { action: "clicked" },
        children: {
            defaultValue: "grrr",
        },
    }

}

export default meta;


const Template: Story<Props> = args => <Button {...args} />;



export const Default = () => <Button variant="primary">Click me boy</Button>;

export const Primary = () => <Button variant="primary">Hello Button</Button>;

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    onClick: action('clicked')
}

export const Tertiary = () => <Button variant="tertiary">Hello Button</Button>;