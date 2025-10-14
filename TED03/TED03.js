# Inicialização da lista de notas
notas = []

# Coleta das notas
for i in range(1, 11):
    while True:
        try:
            nota = float(input(f"Digite a nota do aluno {i}: "))
            if 0 <= nota <= 10:
                notas.append(nota)
                break
            else:
                print("Nota inválida. Digite um valor entre 0 e 10.")
        except ValueError:
            print("Entrada inválida. Digite um número.")

# Cálculos
media_geral = sum(notas) / len(notas)
maior_nota = max(notas)
menor_nota = min(notas)
aprovados = sum(1 for n in notas if n >= 7)
recuperacao = sum(1 for n in notas if 5 <= n < 7)
reprovados = sum(1 for n in notas if n < 5)

# Resultados
print("\n--- Resultados ---")
print(f"Média geral da turma: {media_geral:.2f}")
print(f"Maior nota: {maior_nota}")
print(f"Menor nota: {menor_nota}")
print(f"Alunos aprovados: {aprovados}")
print(f"Alunos em recuperação: {recuperacao}")
print(f"Alunos reprovados: {reprovados}")
