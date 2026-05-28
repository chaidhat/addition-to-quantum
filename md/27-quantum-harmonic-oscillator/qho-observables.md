# QHO Observables
### Mean
Let all the variables in [[quantum-harmonic-oscillator]]

$$
\braket{n|\hat{x}|n} = \tfrac{\alpha}{\sqrt{2}}\braket{n|\hat{a} + \hat{a}^\dagger|n}
$$

By finding out that

$$
\hat{N}(\hat{a}\ket{n}) = (n-1)\hat{a}\ket{n}
$$

Since $n-1$ is an eigenvalue here, we know that $\ket{n-1}$ must exist

$$
\hat{a}\ket{n}=\sqrt{n}\ket{n-1}\quad \hat{a}^\dagger \ket{n}=\sqrt{n+1}\ket{n+1}
$$

so we can get

$$
\hat{a}\ket{n}=c_n\ket{n-1}
$$

We find $c_1$ by doing

$$
\|\hat{a}\ket{n}\|^2 = \bra{n}\hat{a}^\dagger \hat{a}\ket{n} = n
$$

$$
\implies c_n = \sqrt{n}
$$

so we can get

$$
\braket{n|\hat{x}|n} = \tfrac{\alpha}{\sqrt{2}}\bra{n}\left(\sqrt{n}\ket{n-1} + \sqrt{n+1}\ket{n+1}\right) = 0
$$

it's equal to zero as $\braket{n|n\pm 1}=0$

### Mean squared

$$
\braket{n|\hat{x}^2|n} = \tfrac{\alpha^2}{2}\braket{n|\hat{a}^2 + \hat{a}^{\dagger 2} + \hat{a}\hat{a}^\dagger + \hat{a}^\dagger \hat{a}|n}
$$

We know that

$$
\hat{a}^2\ket{n}\propto\ket{n-2}
$$

$$
{\hat{a}^{\dagger}}^2\ket{n}\propto\ket{n+2}
$$

So

$$
\bra{n}\hat{x}^2\ket{n} = \tfrac{\alpha^2}{2}\braket{n|\hat{a}\hat{a}^\dagger + \hat{a}^\dagger \hat{a}|n}
$$

We know 

$$ 
[\hat{a}, \hat{a}^\dagger]=1
$$

$$
\Rightarrow\quad\hat{a}\hat{a}^\dagger=1+\hat{a}^\dagger\hat{a}
$$

so

$$
\bra{n}\hat{x}^2\ket{n}= \tfrac{\alpha^2}{2}\braket{n|1 + 2\hat{a}^\dagger \hat{a}|n}
$$

via [[number-operator]]

$$
= \tfrac{\alpha^2}{2}(2n+1)
$$

### Variance

$$
\Delta x^2(n) = \tfrac{\alpha^2}{2}(2n+1)
$$