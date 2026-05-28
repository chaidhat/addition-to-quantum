# Ladder of States

Assume there is an energy eigenstate $\ket{E}$

$$
\hat{H}\ket{E} = E\ket{E}, \qquad \braket{E|E} = 1
$$

via the [[number-operator|number operator]]

$$
\hat{N}\ket{E} = N_E\ket{E}, \qquad E = \hbar\omega\left(N_E + \tfrac{1}{2}\right)
$$

Let these be called raised/lowered states respectively

$$
\ket{E_+} \equiv \hat{a}^\dagger\ket{E}, \qquad \ket{E_-} \equiv \hat{a}\ket{E}
$$

Note that 

$$
\hat{H}\ket{E_+} = (\hbar\omega\,\hat{a}^\dagger + \hat{a}^\dagger\hat{H})\ket{E}
$$

$$
= \hbar\omega\,\hat{a}^\dagger\ket{E} + \hat{a}^\dagger E\ket{E} = (E + \hbar\omega)\,\hat{a}^\dagger\ket{E} = (E + \hbar\omega)
$$

$$
= (E + \hbar\omega)\ket{E_+}
$$

so $\ket{E_+}$ has eigenstate of $\hat{H}$ with energy eigenvalue $E+\hbar\omega$
similarly, $\ket{E_-}$ has eigenstate of $\hat{H}$ with energy eigenvalue $E-\hbar \omega$ 
so

$$
\braket{E_+ | E_+} = \bra{E}\hat{a}\hat{a}^\dagger\ket{E} = \bra{E}(1 + \hat{N})\ket{E} = (1 + N_E)\braket{E|E}
$$

and

$$
\braket{E_-|E_-} = \bra{E}\hat{N}\ket{E} = N_E\braket{E|E}
$$


