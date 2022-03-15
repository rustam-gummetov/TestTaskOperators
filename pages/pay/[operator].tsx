import { NextRouter, useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Container, MainTitle, Title, Form, Text, InputMaskContainer, Input, Button, Span } from '../styles/operatorStyles'

const Pay = () => {
    const router: NextRouter = useRouter();
    const { operator } = router.query;
    const [message, setMessage] = useState("");
    const [telNumber, setTelNumber] = useState("");
    const [sum, setSum] = useState("");
    const [mistake, setMistake] = useState(false);

    const toPay = (e: FormEvent) => {
        e.preventDefault();
        const random: number = Math.floor(Math.random() * 2);
        if (random === 0) {
            setMessage("Ошибка!");
            setMistake(true);
        } else {
            setMessage("Успешно!");
            setMistake(false);
            setTimeout(() => router.push("/"), 1000);
        }
    }

    return (
        <Container>
            <MainTitle>
                Терминал оплаты мобильного телефона
            </MainTitle>
            <Title>
                Пополнение счета {operator}
            </Title>
            <Form onSubmit={(e) => toPay(e)}>
                <Text>
                    Введите номер телефона
                </Text>
                <InputMaskContainer
                    mask="8(999)999-99-99"
                    type="tel"
                    name="tel"
                    pattern="8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    autoComplete="off"
                    required
                    placeholder="8(999)999-99-99"
                    onChange={(num) => setTelNumber(num.target.value)}
                />
                <Text>
                    Введите сумму
                </Text>
                <Input
                    placeholder="От 1 до 1000"
                    required
                    type="number"
                    min="1"
                    max="1000"
                    onChange={(s) => setSum(s.target.value)}
                />
                <Button
                    type="submit"
                >
                    Оплатить
                </Button>
            </Form>
            <Span mistake={mistake}>
                {message}
            </Span>
        </Container>
    )
}
export default Pay;