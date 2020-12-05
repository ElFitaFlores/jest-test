const text = "Hola mundo"

test('Debe contener un texto', () => {
    expect(text).toMatch('Hola mundo')
})