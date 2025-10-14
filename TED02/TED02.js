# Coleta de dados
print("=== Sistema de Avaliação Acadêmica ===")

# Número de aulas
while True:
    try:
        total_aulas = int(input("Digite o número total de aulas no semestre: "))
        if total_aulas <= 0:
            raise ValueError
        break
    except ValueError:
        print("Valor inválido. Digite um número inteiro positivo.")

# Faltas
while True:
    try:
        faltas = int(input("Digite o número de faltas do aluno: "))
        if faltas < 0 or faltas > total_aulas:
            raise ValueError
        break
    except ValueError:
        print("Valor inválido. Digite um número entre 0 e o total de aulas.")

# Cálculo da frequência
percentual_presenca = ((total_aulas - faltas) / total_aulas) * 100

# Notas P1 e P2
while True:
    try:
        p1 = float(input("Digite a nota da P1: "))
        p2 = float(input("Digite a nota da P2: "))
        if not (0 <= p1 <= 10 and 0 <= p2 <= 10):
            raise ValueError
        break
    except ValueError:
        print("Notas inválidas. Digite valores entre 0 e 10.")

media = (p1 + p2) / 2
recuperacao = None
situacao = ""

# Verificação de frequência
if percentual_presenca < 75:
    situacao = "Reprovado por falta"
else:
    if media >= 7:
        situacao = "Aprovado"
    elif 5 <= media < 7:
        while True:
            try:
                recuperacao = float(input("Digite a nota da recuperação: "))
                if not (0 <= recuperacao <= 10):
                    raise ValueError
                break
            except ValueError:
                print("Nota inválida. Digite um valor entre 0 e 10.")
        nova_media = (media + recuperacao) / 2
        situacao = "Aprovado após recuperação" if nova_media >= 5 else "Reprovado após recuperação"
    else:
        situacao = "Reprovado por nota"

# Exibição dos resultados
print("\n=== Resultado Final ===")
print(f"Número de aulas do semestre: {total_aulas}")
print(f"Número de faltas do aluno: {faltas}")
print(f"Percentual de presença do aluno: {percentual_presenca:.2f}%")
print(f"A primeira nota: {p1}")
print(f"Segunda nota: {p2}")
print(f"Nota complementar (recuperação): {recuperacao if recuperacao is not None else 'Não realizada'}")
print(f"Situação final do aluno: {situacao}")
